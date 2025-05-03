
import { toast } from "@/components/ui/sonner";

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
    const params = new URLSearchParams({
      q: query,
      type: 'artist',
      limit: limit.toString(),
    });

    const result = await this.fetchWithAuth(`/search?${params}`);
    return result.artists.items;
  }

  async getArtistDetails(artistName: string): Promise<ArtistWithDetails | null> {
    try {
      // Search for the artist
      const artists = await this.searchArtists(artistName);
      
      if (!artists || artists.length === 0) {
        return {
          name: artistName,
          id: null,
          imageUrl: null,
          spotifyId: null,
          topTrack: null,
          popularity: null,
          genres: []
        };
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
        name: artistName,
        id: artist.id,
        imageUrl: artist.images && artist.images.length > 0 ? artist.images[0].url : null,
        spotifyId: artist.id,
        topTrack,
        popularity: artist.popularity || null,
        genres: artist.genres || []
      };
    } catch (error) {
      console.error(`Error fetching artist details for ${artistName}:`, error);
      return {
        name: artistName,
        id: null,
        imageUrl: null,
        spotifyId: null,
        topTrack: null,
        popularity: null,
        genres: []
      };
    }
  }

  async getArtistTopTracks(artistId: string) {
    return this.fetchWithAuth(`/artists/${artistId}/top-tracks?market=US`);
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
