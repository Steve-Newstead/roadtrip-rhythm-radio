
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import ArtistCard from "./ArtistCard";
import { Disc3, Headphones, ListMusic, Loader2, Music, Shuffle, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { ArtistWithDetails, spotifyApi } from "@/utils/spotify";
import { useNavigate } from "react-router-dom";
import { getOrganizedArtistsByFestival } from "@/data/festivals";
import StageArtistList from "./StageArtistList";

interface PlaylistGeneratorProps {
  startLocation?: string;
  endLocation?: string;
  festival?: string;
}

const PlaylistGenerator = ({ startLocation, endLocation, festival }: PlaylistGeneratorProps) => {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [isLoadingArtists, setIsLoadingArtists] = useState(false);
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [playlistUrl, setPlaylistUrl] = useState<string | null>(null);
  const [artistsWithDetails, setArtistsWithDetails] = useState<{ [stageName: string]: ArtistWithDetails[] }>({});
  const { user, spotifyAuth } = useAuth();
  const navigate = useNavigate();
  
  // Set the Spotify access token when it changes
  useEffect(() => {
    if (spotifyAuth.accessToken) {
      spotifyApi.setAccessToken(spotifyAuth.accessToken);
    }
  }, [spotifyAuth.accessToken]);
  
  // Load artists when festival changes
  useEffect(() => {
    const fetchArtistDetails = async () => {
      if (!festival) return;
      
      setIsLoadingArtists(true);
      setSelectedArtists([]);
      
      try {
        const organizedStages = getOrganizedArtistsByFestival(festival);
        const detailedArtists: { [stageName: string]: ArtistWithDetails[] } = {};
        
        // Process each stage
        for (const stage of organizedStages) {
          // Use the new API that leverages Spotify IDs
          const artistDetailsMap = await spotifyApi.getArtistsWithDetails(stage.artists);
          
          const stageArtists: ArtistWithDetails[] = [];
          for (const artist of stage.artists) {
            const artistDetails = artistDetailsMap.get(artist.name);
            if (artistDetails) {
              stageArtists.push(artistDetails);
            }
          }
          
          // Sort artists alphabetically within each stage
          detailedArtists[stage.stageName] = stageArtists.sort((a, b) => 
            a.name.localeCompare(b.name)
          );
        }
        
        setArtistsWithDetails(detailedArtists);
      } catch (error) {
        console.error("Error fetching artist details:", error);
        toast.error("Error loading artists", {
          description: "Could not load artist information from Spotify"
        });
      } finally {
        setIsLoadingArtists(false);
      }
    };

    fetchArtistDetails();
  }, [festival, spotifyAuth.accessToken]);
  
  const toggleArtistSelection = (artistName: string) => {
    setSelectedArtists(prev => {
      if (prev.includes(artistName)) {
        return prev.filter(name => name !== artistName);
      } else {
        return [...prev, artistName];
      }
    });
  };

  const findArtistByName = (name: string): ArtistWithDetails | null => {
    for (const stageName in artistsWithDetails) {
      const artist = artistsWithDetails[stageName].find(a => a.name === name);
      if (artist) return artist;
    }
    return null;
  };

  const createSpotifyPlaylist = async () => {
    if (!user || !spotifyAuth.accessToken) {
      navigate("/auth");
      return;
    }
    
    if (!festival || !startLocation) {
      toast.error("Missing information", {
        description: "Please select a festival and starting point"
      });
      return;
    }
    
    try {
      setIsCreatingPlaylist(true);
      
      // Get user profile
      const userProfile = await spotifyApi.getUserProfile();
      
      // Create a new playlist
      const festivalName = festival.replace(/([a-z])([A-Z])/g, '$1 $2');
      const playlistName = `Roadtrip Radio: ${festivalName} from ${startLocation}`;
      const playlistDescription = `A playlist for my road trip to ${festivalName} from ${startLocation}`;
      
      const playlist = await spotifyApi.createPlaylist(
        userProfile.id,
        playlistName,
        playlistDescription,
        true // public playlist
      );
      
      // Get tracks for each selected artist
      // Collect all Spotify IDs for selected artists
      const selectedArtistIds: string[] = [];
      
      for (const artistName of selectedArtists) {
        const artist = findArtistByName(artistName);
        if (artist?.spotifyId) {
          selectedArtistIds.push(artist.spotifyId);
        }
      }
      
      // Use the batch API to get top tracks for all selected artists
      const topTracksMap = await spotifyApi.getMultipleArtistsTopTracks(selectedArtistIds);
      
      // Collect track URIs from the top tracks (up to 3 per artist)
      let trackUris: string[] = [];
      for (const artistId in topTracksMap) {
        const artistTracks = topTracksMap[artistId];
        const artistTrackUris = artistTracks.slice(0, 3).map(track => track.uri);
        trackUris.push(...artistTrackUris);
      }
      
      // Add tracks to playlist
      if (trackUris.length > 0) {
        await spotifyApi.addTracksToPlaylist(playlist.id, trackUris);
      }
      
      // Save playlist URL
      setPlaylistUrl(playlist.external_urls.spotify);
      setPlaylistCreated(true);
      
      toast.success("Playlist created!", {
        description: "Your road trip playlist is ready on Spotify"
      });
      
    } catch (error) {
      console.error("Error creating playlist:", error);
      toast.error("Error creating playlist", {
        description: error.message || "Failed to create Spotify playlist"
      });
    } finally {
      setIsCreatingPlaylist(false);
    }
  };
  
  if (!startLocation || !endLocation || !festival) {
    return null;
  }
  
  const allStages = Object.keys(artistsWithDetails);
  const totalArtists = Object.values(artistsWithDetails).reduce(
    (count, artists) => count + artists.length, 0
  );
  
  // No artists found for this festival
  if (!isLoadingArtists && totalArtists === 0) {
    return (
      <div className="w-full mt-6 p-8 rounded-3xl bg-muted/30 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">No Artists Found</h2>
        <p className="text-muted-foreground">
          We couldn't find any artists for this festival. Please try another festival.
        </p>
      </div>
    );
  }
  
  const needsAuthentication = !user || !spotifyAuth.accessToken;
  
  const renderSelectedArtistsTab = () => {
    if (selectedArtists.length === 0) {
      return (
        <div className="rounded-3xl overflow-hidden bg-muted/40 p-8 text-center">
          <h3 className="text-xl font-medium mb-2">No artists selected yet</h3>
          <p className="text-muted-foreground">
            Select some artists to include them in your playlist
          </p>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedArtists.map(artistName => {
          const artist = findArtistByName(artistName);
          if (!artist) return null;
          return (
            <ArtistCard 
              key={artistName} 
              artist={artist} 
              isSelected={true}
              onToggle={() => toggleArtistSelection(artistName)}
            />
          );
        })}
      </div>
    );
  };

  // Warning for unauthenticated users
  const renderAuthWarning = () => {
    if (!needsAuthentication) return null;
    
    return (
      <div className="mb-6 p-4 border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded-lg">
        <div className="flex items-start gap-3">
          <Music className="h-5 w-5 text-amber-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-1">Connect with Spotify</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Please connect your Spotify account to see artist images and create playlists. 
              <Button 
                variant="link" 
                onClick={() => navigate("/auth")} 
                className="px-1 py-0 h-auto text-sm font-medium underline text-amber-700 dark:text-amber-300"
              >
                Connect now
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Roadtrip Radio</h2>
          <p className="text-muted-foreground">Create a playlist with artists playing at {endLocation}</p>
        </div>
        
        {playlistCreated && playlistUrl ? (
          <Button
            onClick={() => window.open(playlistUrl, '_blank')}
            className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white gap-2"
            size="lg"
          >
            <Music size={16} />
            <span>Open in Spotify</span>
          </Button>
        ) : (
          <Button
            onClick={needsAuthentication ? () => navigate("/auth") : createSpotifyPlaylist}
            disabled={isCreatingPlaylist || (!needsAuthentication && selectedArtists.length === 0)}
            className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white gap-2"
            size="lg"
          >
            {isCreatingPlaylist ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : needsAuthentication ? (
              <>
                <Music size={16} />
                <span>Connect to Spotify</span>
              </>
            ) : selectedArtists.length === 0 ? (
              <>
                <ListMusic size={16} />
                <span>Select Artists First</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Create Spotify Playlist</span>
              </>
            )}
          </Button>
        )}
      </div>
      
      {/* Display warning for unauthenticated users */}
      {renderAuthWarning()}
      
      <Tabs defaultValue="artists" className="w-full">
        <TabsList className="mb-8 bg-muted/30 p-1 rounded-full w-auto inline-flex">
          <TabsTrigger value="artists" className="rounded-full data-[state=active]:bg-white">
            <Music size={16} className="h-4 w-4 mr-2" />
            Artists by Stage
          </TabsTrigger>
          <TabsTrigger value="selection" className="rounded-full data-[state=active]:bg-white">
            <ListMusic size={16} className="h-4 w-4 mr-2" />
            Selected ({selectedArtists.length})
          </TabsTrigger>
          <TabsTrigger value="options" className="rounded-full data-[state=active]:bg-white">
            <Headphones size={16} className="h-4 w-4 mr-2" />
            Playlist Options
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="artists" className="mt-0">
          {isLoadingArtists ? (
            <div className="flex flex-col items-center justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin mb-4 text-festival-purple" />
              <p>Loading artist information...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* First display main stages */}
              {allStages
                .filter(stageName => {
                  const stageData = getOrganizedArtistsByFestival(festival).find(s => s.stageName === stageName);
                  return stageData?.isMainStage;
                })
                .map(stageName => (
                  <StageArtistList
                    key={stageName}
                    stageName={stageName}
                    artists={artistsWithDetails[stageName]}
                    isMainStage={true}
                    selectedArtists={selectedArtists}
                    onArtistToggle={toggleArtistSelection}
                  />
                ))}
              
              {/* Then display other stages */}
              {allStages
                .filter(stageName => {
                  const stageData = getOrganizedArtistsByFestival(festival).find(s => s.stageName === stageName);
                  return !stageData?.isMainStage;
                })
                .map(stageName => (
                  <StageArtistList
                    key={stageName}
                    stageName={stageName}
                    artists={artistsWithDetails[stageName]}
                    isMainStage={false}
                    selectedArtists={selectedArtists}
                    onArtistToggle={toggleArtistSelection}
                  />
                ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="selection" className="mt-0">
          {renderSelectedArtistsTab()}
        </TabsContent>
        
        <TabsContent value="options" className="mt-0">
          <div className="rounded-3xl overflow-hidden bg-muted/40 p-8">
            <h3 className="text-xl font-medium mb-4">Playlist options</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Include top tracks</span>
                <span className="text-sm bg-black/10 px-3 py-1 rounded-full">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Enable shuffle</span>
                <span className="text-sm bg-black/10 px-3 py-1 rounded-full">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Playlist visibility</span>
                <span className="text-sm bg-black/10 px-3 py-1 rounded-full">Public</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlaylistGenerator;
