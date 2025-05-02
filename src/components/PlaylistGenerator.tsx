
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ArtistCard from "./ArtistCard";
import { Disc3, Music, Shuffle, Sparkles } from "lucide-react";

// Mock artist data - in a real app, this would come from an API
const MOCK_ARTISTS = [
  {
    id: "1",
    name: "Coldplay",
    location: "London, UK",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
    topTrack: "Yellow",
  },
  {
    id: "2",
    name: "Mumford & Sons",
    location: "London, UK",
    topTrack: "I Will Wait",
  },
  {
    id: "3",
    name: "The Killers",
    location: "Las Vegas, Nevada",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433",
    topTrack: "Mr. Brightside",
  },
  {
    id: "4",
    name: "Florence and the Machine",
    location: "London, UK",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb3f579f9559611c0c5ef8d555",
    topTrack: "Dog Days Are Over",
  },
  {
    id: "5",
    name: "Elbow",
    location: "Manchester, UK",
    topTrack: "One Day Like This",
  }
];

interface PlaylistGeneratorProps {
  startLocation?: string;
  endLocation?: string;
  festival?: string;
}

const PlaylistGenerator = ({ startLocation, endLocation, festival }: PlaylistGeneratorProps) => {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const { toast } = useToast();
  
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
  
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Your Festival Road Trip</h2>
          <p className="text-muted-foreground">Artists along the way to your festival</p>
        </div>
        <Button
          onClick={createSpotifyPlaylist}
          disabled={isCreatingPlaylist || playlistCreated}
          className="rounded-full bg-black hover:bg-black/90 text-white gap-2"
          size="lg"
        >
          {isCreatingPlaylist ? (
            <>Processing...</>
          ) : playlistCreated ? (
            <>Playlist Created!</>
          ) : (
            <>
              <Sparkles size={16} />
              <span>Create on Spotify</span>
            </>
          )}
        </Button>
      </div>
      
      <Tabs defaultValue="artists" className="w-full">
        <TabsList className="mb-8 bg-muted/30 p-1 rounded-full w-auto inline-flex">
          <TabsTrigger value="artists" className="rounded-full data-[state=active]:bg-white">
            <Music className="h-4 w-4 mr-2" />
            Artists ({MOCK_ARTISTS.length})
          </TabsTrigger>
          <TabsTrigger value="tracks" className="rounded-full data-[state=active]:bg-white">
            <Disc3 className="h-4 w-4 mr-2" />
            Tracks (12)
          </TabsTrigger>
          <TabsTrigger value="options" className="rounded-full data-[state=active]:bg-white">
            <Shuffle className="h-4 w-4 mr-2" />
            Options
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="artists" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_ARTISTS.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tracks" className="mt-0">
          <div className="rounded-3xl overflow-hidden bg-muted/40 p-8 text-center">
            <h3 className="text-xl font-medium mb-2">Track listing will appear here</h3>
            <p className="text-muted-foreground">
              Create your playlist to see the full track listing
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="options" className="mt-0">
          <div className="rounded-3xl overflow-hidden bg-muted/40 p-8 text-center">
            <h3 className="text-xl font-medium mb-2">Playlist options</h3>
            <p className="text-muted-foreground">
              Customize your playlist settings here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlaylistGenerator;
