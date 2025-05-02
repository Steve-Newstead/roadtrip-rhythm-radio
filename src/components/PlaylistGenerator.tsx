import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ArtistCard from "./ArtistCard";
import { Disc3, Headphones, ListMusic, Music, Shuffle, Sparkles } from "lucide-react";

// Mock festival artists data - this would come from a real API in a production app
const FESTIVAL_ARTISTS = {
  "glastonbury": [
    {
      id: "1",
      name: "Coldplay",
      location: "London, UK",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
      topTrack: "Yellow",
      spotifyId: "4gzpq5DPGxSnKTe4SA8HAU"
    },
    {
      id: "2",
      name: "Dua Lipa",
      location: "London, UK",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb97f5a1f3396ad0583cabc1cc",
      topTrack: "Don't Start Now",
      spotifyId: "6M2wZ9GZgrQXHCFfjv46we"
    },
    {
      id: "3",
      name: "SZA",
      location: "St. Louis, Missouri",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a94fb457b0fe20de164f8db",
      topTrack: "Kill Bill",
      spotifyId: "7tYKF4w9nC0nq9CsPZTHyP"
    }
  ],
  "coachella": [
    {
      id: "4",
      name: "Lana Del Rey",
      location: "New York, NY",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828",
      topTrack: "Summertime Sadness",
      spotifyId: "00FQb4jTyendYWaN8pK0wa"
    },
    {
      id: "5",
      name: "Tyler, The Creator",
      location: "Los Angeles, CA",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb3477a44b93da94fcf5b9c3a6",
      topTrack: "EARFQUAKE",
      spotifyId: "4V8LLVI7PbaPR0K2TGSxFF"
    }
  ],
  "tomorrowland": [
    {
      id: "6",
      name: "Martin Garrix",
      location: "Amsterdam, Netherlands",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5ebf4d866a5d84ff19daed447c8",
      topTrack: "Animals",
      spotifyId: "60d24wfXkVzDSfLS6hyCjZ"
    },
    {
      id: "7",
      name: "David Guetta",
      location: "Paris, France", 
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eba8c99a48fc5c937212027200",
      topTrack: "Titanium",
      spotifyId: "1Cs0zKBU1kc0i8ypK3B9ai"
    }
  ],
  "rockwerchter": [
    {
      id: "8",
      name: "Foo Fighters",
      location: "Seattle, WA",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a43b87b50cd3d03544b578d",
      topTrack: "Everlong",
      spotifyId: "7jy3rLJdDQY21OgRLCZ9sD"
    },
    {
      id: "9",
      name: "The Cure",
      location: "Crawley, UK",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0b962e300b09213c8618e1a9",
      topTrack: "Friday I'm In Love",
      spotifyId: "7bu3H8JO7d0UbMoVzbo70s"
    }
  ],
  "lollapalooza": [
    {
      id: "10",
      name: "Kendrick Lamar",
      location: "Compton, CA",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5eb92df4d5d2197d80f2040cee8",
      topTrack: "HUMBLE.",
      spotifyId: "2YZyLoL8N0Wb9xBt1NhZWg"
    },
    {
      id: "11",
      name: "Billie Eilish",
      location: "Los Angeles, CA",
      imageUrl: "https://i.scdn.co/image/ab6761610000e5ebd8b9980db67272cb4d2c3daf",
      topTrack: "bad guy",
      spotifyId: "6qqNVTkY8uBg9cP3Jd7DAH"
    }
  ]
};

interface PlaylistGeneratorProps {
  startLocation?: string;
  endLocation?: string;
  festival?: string;
}

const PlaylistGenerator = ({ startLocation, endLocation, festival }: PlaylistGeneratorProps) => {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const { toast } = useToast();
  
  // Get festival artists based on selected festival
  const festivalArtists = festival && FESTIVAL_ARTISTS[festival as keyof typeof FESTIVAL_ARTISTS] || [];
  
  const toggleArtistSelection = (artistId: string) => {
    setSelectedArtists(prev => {
      if (prev.includes(artistId)) {
        return prev.filter(id => id !== artistId);
      } else {
        return [...prev, artistId];
      }
    });
  };

  const createSpotifyPlaylist = () => {
    setIsCreatingPlaylist(true);
    
    // Simulate API call to Spotify
    setTimeout(() => {
      setIsCreatingPlaylist(false);
      setPlaylistCreated(true);
      toast({
        title: "Playlist created!",
        description: "Your road trip playlist is ready on Spotify",
      });
    }, 2000);
  };
  
  if (!startLocation || !endLocation || !festival) {
    return null;
  }
  
  // No artists found for this festival
  if (festivalArtists.length === 0) {
    return (
      <div className="w-full mt-6 p-8 rounded-3xl bg-muted/30 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">No Artists Found</h2>
        <p className="text-muted-foreground">
          We couldn't find any artists for this festival. Please try another festival.
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Your Festival Playlist</h2>
          <p className="text-muted-foreground">Create a playlist with artists playing at {festival}</p>
        </div>
        <Button
          onClick={createSpotifyPlaylist}
          disabled={isCreatingPlaylist || playlistCreated || selectedArtists.length === 0}
          className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white gap-2"
          size="lg"
        >
          {isCreatingPlaylist ? (
            <>Processing...</>
          ) : playlistCreated ? (
            <>Playlist Created!</>
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
      </div>
      
      <Tabs defaultValue="artists" className="w-full">
        <TabsList className="mb-8 bg-muted/30 p-1 rounded-full w-auto inline-flex">
          <TabsTrigger value="artists" className="rounded-full data-[state=active]:bg-white">
            <Music size={16} className="h-4 w-4 mr-2" />
            Artists ({festivalArtists.length})
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalArtists.map(artist => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                isSelected={selectedArtists.includes(artist.id)}
                onToggle={() => toggleArtistSelection(artist.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="selection" className="mt-0">
          {selectedArtists.length === 0 ? (
            <div className="rounded-3xl overflow-hidden bg-muted/40 p-8 text-center">
              <h3 className="text-xl font-medium mb-2">No artists selected yet</h3>
              <p className="text-muted-foreground">
                Select some artists to include them in your playlist
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivalArtists
                .filter(artist => selectedArtists.includes(artist.id))
                .map(artist => (
                  <ArtistCard 
                    key={artist.id} 
                    artist={artist} 
                    isSelected={true}
                    onToggle={() => toggleArtistSelection(artist.id)}
                  />
                ))}
            </div>
          )}
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
