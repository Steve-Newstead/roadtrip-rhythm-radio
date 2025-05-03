
import { toast } from "sonner";

export interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string }[];
  genres?: string[];
  followers?: { total: number };
  popularity?: number;
  external_urls?: { spotify: string };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  uri: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    name: string;
    images: { url: string }[];
  };
}

export interface ArtistWithDetails {
  name: string;
  id: string;
  imageUrl: string | null;
  spotifyId: string | null;
  topTrack: string | null;
  popularity: number | null;
  genres: string[];
}

class SpotifyAPI {
  private accessToken: string | null = null;

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    if (!this.accessToken) {
      throw new Error("No access token available");
    }

    const url = `https://api.spotify.com/v1${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Error calling Spotify API");
      }

      return await response.json();
    } catch (error) {
      console.error("Spotify API Error:", error);
      toast.error("Spotify API Error", {
        description: error.message,
      });
      throw error;
    }
  }

  async getUserProfile() {
    return this.fetchWithAuth('/me');
  }

  async searchArtists(query: string, limit = 1) {
    if (!this.accessToken) {
      return [];
    }

    const params = new URLSearchParams({
      q: query,
      type: 'artist',
      limit: limit.toString(),
    });

    try {
      const result = await this.fetchWithAuth(`/search?${params}`);
      console.log("Search result url:", `/search?${params}`);
      var resultsArtistSearch =  result.artists.items;
      console.log("Search result:", resultsArtistSearch);
      return result.artists.items;
    } catch (error) {
      console.error(`Error searching for artist ${query}:`, error);
      return [];
    }
  }

  async getMultipleArtistsByName(artistNames: string[]): Promise<Map<string, ArtistWithDetails>> {
    // Return a map of artist name to details
    const artistDetailsMap = new Map<string, ArtistWithDetails>();
    
    // If no token is available, return placeholder details for each artist
    if (!this.accessToken) {
      artistNames.forEach(name => {
        artistDetailsMap.set(name, this.createPlaceholderArtist(name));
      });
      return artistDetailsMap;
    }
    
    try {
      // First, search for these artists to get their IDs (we need to do this in batches)
      const searchBatchSize = 5;
      const searchResults = new Map<string, { id: string, name: string }>();  // Map of artist name to Spotify ID and actual Spotify name
      
      for (let i = 0; i < artistNames.length; i += searchBatchSize) {
        const batch = artistNames.slice(i, i + searchBatchSize);
        const searchPromises = batch.map(name => 
          this.searchArtists(name)
            .then(artists => {
              if (artists && artists.length > 0) {
                // Store both the ID and the actual name from Spotify (might be slightly different from our input)
                searchResults.set(name, { id: artists[0].id, name: artists[0].name });
              }
            })
            .catch(error => {
              console.error(`Error searching for artist ${name}:`, error);
            })
        );
        
        await Promise.all(searchPromises);
        
        // Add a small delay between batches to prevent rate limiting
        if (i + searchBatchSize < artistNames.length) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      // Collect all found Spotify IDs
      const foundSpotifyIds = Array.from(searchResults.values())
        .map(result => result.id)
        .filter(Boolean);
      
      // Now get all artist details in batches of 50 (Spotify API limit)
      const spotifyArtistDetails = new Map<string, SpotifyArtist>();
      for (let i = 0; i < foundSpotifyIds.length; i += 50) {
        const idsBatch = foundSpotifyIds.slice(i, i + 50);
        
        if (idsBatch.length > 0) {
          try {
            const response = await this.fetchWithAuth(`/artists?ids=${idsBatch.join(',')}`);
            console.log("Fetched artist details:", response);
            
            if (response.artists) {
              response.artists.forEach((artist: SpotifyArtist) => {
                spotifyArtistDetails.set(artist.id, artist);
              });
            }
          } catch (error) {
            console.error("Error fetching multiple artists:", error);
          }
          
          // Add a small delay between batches to prevent rate limiting
          if (i + 50 < foundSpotifyIds.length) {
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      }
      
      // Get top tracks for each artist (we still need to do this one by one)
      const topTracksMap = new Map<string, string>();
      const topTracksBatchSize = 5;
      
      const spotifyIds = Array.from(spotifyArtistDetails.keys());
      for (let i = 0; i < spotifyIds.length; i += topTracksBatchSize) {
        const batch = spotifyIds.slice(i, i + topTracksBatchSize);
        const topTrackPromises = batch.map(id => 
          this.getArtistTopTracks(id)
            .then(data => {
              if (data && data.tracks && data.tracks.length > 0) {
                topTracksMap.set(id, data.tracks[0].name);
              }
            })
            .catch(error => {
              console.error(`Error fetching top tracks for artist ${id}:`, error);
            })
        );
        
        await Promise.all(topTrackPromises);
        
        // Add a small delay between batches to prevent rate limiting
        if (i + topTracksBatchSize < spotifyIds.length) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      // Now build the final artist details map - critically, use the original artist name as the key
      // but incorporate all the Spotify data correctly
      artistNames.forEach(originalName => {
        const searchResult = searchResults.get(originalName);
        
        if (searchResult) {
          const { id, name: spotifyName } = searchResult;
          const artist = spotifyArtistDetails.get(id);
          const topTrack = topTracksMap.get(id);
          
          if (artist) {
            artistDetailsMap.set(originalName, {
              name: originalName, // Use the original name from our data
              id: artist.id,
              imageUrl: artist.images && artist.images.length > 0 ? artist.images[0].url : null,
              spotifyId: artist.id,
              topTrack,
              popularity: artist.popularity || null,
              genres: artist.genres || []
            });
          } else {
            // For artists we found in search but couldn't get details
            artistDetailsMap.set(originalName, this.createPlaceholderArtist(originalName));
          }
        } else {
          // For artists we couldn't find at all
          artistDetailsMap.set(originalName, this.createPlaceholderArtist(originalName));
        }
      });
      
      return artistDetailsMap;
    } catch (error) {
      console.error("Error in getMultipleArtistsByName:", error);
      // Return placeholders for all artists on error
      artistNames.forEach(name => {
        artistDetailsMap.set(name, this.createPlaceholderArtist(name));
      });
      return artistDetailsMap;
    }
  }

  // Helper method to create a placeholder artist
  private createPlaceholderArtist(name: string): ArtistWithDetails {
    return {
      name,
      id: null,
      imageUrl: null,
      spotifyId: null,
      topTrack: null,
      popularity: null,
      genres: []
    };
  }

  async getArtistDetails(artistName: string): Promise<ArtistWithDetails | null> {
    try {
      // Search for the artist
      const artists = await this.searchArtists(artistName);
      
      if (!artists || artists.length === 0) {
        return this.createPlaceholderArtist(artistName);
      }

      const artist = artists[0];
      let topTrack = null;

      try {
        // Get artist's top tracks
        const topTracks = await this.getArtistTopTracks(artist.id);
        if (topTracks && topTracks.tracks && topTracks.tracks.length > 0) {
          topTrack = topTracks.tracks[0].name;
        }
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }

      return {
        name: artistName, // Use the input name rather than what Spotify returns
        id: artist.id,
        imageUrl: artist.images && artist.images.length > 0 ? artist.images[0].url : null,
        spotifyId: artist.id,
        topTrack,
        popularity: artist.popularity || null,
        genres: artist.genres || []
      };
    } catch (error) {
      console.error(`Error fetching artist details for ${artistName}:`, error);
      return this.createPlaceholderArtist(artistName);
    }
  }

  async getArtistTopTracks(artistId: string) {
    return this.fetchWithAuth(`/artists/${artistId}/top-tracks?market=US`);
  }

  async getMultipleArtistsTopTracks(artistIds: string[]) {
    const batchSize = 5;
    const allTopTracks: Record<string, SpotifyTrack[]> = {};
    
    for (let i = 0; i < artistIds.length; i += batchSize) {
      const batch = artistIds.slice(i, i + batchSize);
      const trackPromises = batch.map(id => 
        this.getArtistTopTracks(id)
          .then(data => {
            if (data && data.tracks && data.tracks.length > 0) {
              allTopTracks[id] = data.tracks;
            }
          })
          .catch(error => {
            console.error(`Error fetching top tracks for artist ${id}:`, error);
          })
      );
      
      await Promise.all(trackPromises);
      
      // Add a small delay between batches to prevent rate limiting
      if (i + batchSize < artistIds.length) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
    
    return allTopTracks;
  }

  async createPlaylist(userId: string, name: string, description: string, isPublic: boolean = true) {
    return this.fetchWithAuth(`/users/${userId}/playlists`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        public: isPublic,
      }),
    });
  }

  async addTracksToPlaylist(playlistId: string, trackUris: string[]) {
    return this.fetchWithAuth(`/playlists/${playlistId}/tracks`, {
      method: 'POST',
      body: JSON.stringify({
        uris: trackUris,
      }),
    });
  }
}

// Export a singleton instance
export const spotifyApi = new SpotifyAPI();

