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
  id: string | null;
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

  // Get multiple artists directly using their Spotify IDs
  async getMultipleArtists(spotifyIds: string[]): Promise<SpotifyArtist[]> {
    if (!spotifyIds.length || !this.accessToken) {
      return [];
    }

    try {
      // Filter out null/undefined IDs
      const validIds = spotifyIds.filter(Boolean);
      
      // If we don't have any valid IDs, return empty array
      if (validIds.length === 0) {
        return [];
      }
      
      // Spotify API allows maximum 50 IDs per request
      const results: SpotifyArtist[] = [];
      
      // Process in batches of 50
      for (let i = 0; i < validIds.length; i += 50) {
        const batch = validIds.slice(i, i + 50);
        const endpoint = `/artists?ids=${batch.join(',')}`;
        
        const response = await this.fetchWithAuth(endpoint);
        
        if (response && response.artists) {
          results.push(...response.artists);
        }
        
        // Add a small delay between batches to prevent rate limiting
        if (i + 50 < validIds.length) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      return results;
    } catch (error) {
      console.error("Error fetching multiple artists:", error);
      return [];
    }
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
      const result = await this.fetchWithAuth(`/search?q="${encodeURIComponent(query)}"&type=artist&limit=1`);
      console.log("Search result url:", `/search?${params}`);
      var resultsArtistSearch =  result.artists.items;
      console.log("Search result:", resultsArtistSearch);
      return result.artists.items;
    } catch (error) {
      console.error(`Error searching for artist ${query}:`, error);
      return [];
    }
  }

  // Updated to work with direct Spotify IDs
  async getArtistsWithDetails(artists: { name: string; spotify_id: string | null }[]): Promise<Map<string, ArtistWithDetails>> {
    const artistDetailsMap = new Map<string, ArtistWithDetails>();
    
    // If no token is available or no artists, return empty map
    if (!this.accessToken || !artists.length) {
      artists.forEach(artist => {
        artistDetailsMap.set(artist.name, this.createPlaceholderArtist(artist.name));
      });
      return artistDetailsMap;
    }
    
    try {
      // Collect all Spotify IDs - only use valid non-null IDs
      const spotifyIds = artists
        .filter(artist => artist.spotify_id)
        .map(artist => artist.spotify_id)
        .filter(Boolean) as string[];
      
      // Map to keep track of Spotify ID to original artist name
      const idToNameMap = new Map<string, string>();
      artists.forEach(artist => {
        if (artist.spotify_id) {
          idToNameMap.set(artist.spotify_id, artist.name);
        }
      });
      
      // Get artist details via the bulk API
      const spotifyArtists = await this.getMultipleArtists(spotifyIds);
      
      // Create a map of Spotify ID to artist details
      const spotifyArtistsMap = new Map<string, SpotifyArtist>();
      spotifyArtists.forEach(artist => {
        if (artist && artist.id) {  // Make sure artist and artist.id exist
          spotifyArtistsMap.set(artist.id, artist);
        }
      });
      
      // Get top tracks for artists with valid Spotify IDs
      const topTracksMap = await this.getMultipleArtistsTopTracks(spotifyIds);
      
      // Build the final artist details map - using original name as key
      artists.forEach(artist => {
        const { name, spotify_id } = artist;
        
        if (spotify_id && spotifyArtistsMap.has(spotify_id)) {
          const spotifyArtist = spotifyArtistsMap.get(spotify_id)!;
          const topTrack = topTracksMap[spotify_id]?.[0]?.name || null;
          
          artistDetailsMap.set(name, {
            name,
            id: spotifyArtist.id,
            imageUrl: spotifyArtist.images && spotifyArtist.images.length > 0 ? spotifyArtist.images[0].url : null,
            spotifyId: spotify_id,
            topTrack,
            popularity: spotifyArtist.popularity || null,
            genres: spotifyArtist.genres || []
          });
        } else {
          // For artists without valid Spotify data
          artistDetailsMap.set(name, this.createPlaceholderArtist(name));
        }
      });
      
      return artistDetailsMap;
    } catch (error) {
      console.error("Error in getArtistsWithDetails:", error);
      
      // Return placeholders for all artists on error
      artists.forEach(artist => {
        artistDetailsMap.set(artist.name, this.createPlaceholderArtist(artist.name));
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

  async getArtistDetails(artistName: string, spotifyId: string | null = null): Promise<ArtistWithDetails | null> {
    try {
      let artist: SpotifyArtist | null = null;
      
      if (spotifyId) {
        // If we have a Spotify ID, use it directly
        const artists = await this.getMultipleArtists([spotifyId]);
        if (artists && artists.length > 0) {
          artist = artists[0];
        }
      } else {
        // Fallback to search by name
        const artists = await this.searchArtists(artistName);
        if (artists && artists.length > 0) {
          artist = artists[0];
        }
      }
      
      if (!artist) {
        return this.createPlaceholderArtist(artistName);
      }

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
