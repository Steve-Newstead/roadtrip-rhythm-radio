
import { toast } from "@/components/ui/sonner";

export interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string }[];
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
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Error calling Spotify API");
      }

      return await response.json();
    } catch (error) {
      toast.error("Spotify API Error", {
        description: error.message,
      });
      throw error;
    }
  }

  async getUserProfile() {
    return this.fetchWithAuth('/me');
  }

  async searchArtists(query: string) {
    const params = new URLSearchParams({
      q: query,
      type: 'artist',
      limit: '10',
    });

    return this.fetchWithAuth(`/search?${params}`);
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
