
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ArtistCard from "./ArtistCard";

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
      <h2 className="text-2xl font-bold mb-6">Your Festival Road Trip Playlist</h2>
      
      <Tabs defaultValue="artists">
        <TabsList className="mb-4">
          <TabsTrigger value="artists">Artists ({MOCK_ARTISTS.length})</TabsTrigger>
          <TabsTrigger value="tracks">Tracks (12)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="artists" className="space-y-4">
          {MOCK_ARTISTS.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </TabsContent>
        
        <TabsContent value="tracks">
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Track listing will appear here</h3>
            <p className="text-muted-foreground text-sm">
              Create your playlist to see the full track listing
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex justify-center">
        <Button
          size="lg"
          onClick={createSpotifyPlaylist}
          disabled={isCreatingPlaylist || playlistCreated}
          className="px-8"
        >
          {isCreatingPlaylist ? "Creating..." : 
           playlistCreated ? "Playlist Created!" : 
           "Create Spotify Playlist"}
        </Button>
      </div>
    </div>
  );
};

export default PlaylistGenerator;
