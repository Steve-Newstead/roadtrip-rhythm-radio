
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Disc3, ExternalLink, Music, Play, Plus } from "lucide-react";
import { ArtistWithDetails } from "@/utils/spotify";
import { Badge } from "./ui/badge";

interface ArtistCardProps {
  artist: ArtistWithDetails;
  isSelected?: boolean;
  onToggle?: () => void;
}

const ArtistCard = ({ artist, isSelected = false, onToggle }: ArtistCardProps) => {
  const { name, imageUrl, topTrack, genres } = artist;
  
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const openSpotifyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (artist.spotifyId) {
      window.open(`https://open.spotify.com/artist/${artist.spotifyId}`, '_blank');
    }
  };

  return (
    <Card className="album-card border-0 shadow-md group cursor-pointer" onClick={onToggle}>
      <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/30 overflow-hidden">
        <Avatar className="h-full w-full rounded-none">
          <AvatarImage 
            src={imageUrl || undefined} 
            alt={name} 
            className="object-cover h-full w-full transition-transform group-hover:scale-110"
          />
          <AvatarFallback className="bg-gradient-to-br from-festival-purple to-festival-blue text-white text-4xl h-full w-full rounded-none">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="font-bold text-lg tracking-tight">{name}</h3>
          {genres && genres.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {genres.slice(0, 2).map(genre => (
                <Badge key={genre} variant="outline" className="text-xs bg-black/30 border-none text-white">
                  {genre}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        {artist.spotifyId && (
          <Button 
            size="icon" 
            variant="secondary" 
            className="absolute right-3 bottom-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black hover:bg-white/90"
            onClick={openSpotifyLink}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
        
        {isSelected && (
          <div className="absolute top-3 right-3 bg-[#1DB954] text-white rounded-full p-1">
            <CheckCircle2 size={20} />
          </div>
        )}
      </div>
      <div className="p-3 flex items-center justify-between">
        {topTrack ? (
          <div className="flex items-center gap-2">
            <Disc3 className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium truncate max-w-[180px]">{topTrack}</span>
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">No top track found</span>
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          className="rounded-full"
          onClick={onToggle}
        >
          {isSelected ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-1 text-[#1DB954]" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-1" />
              <span>Add</span>
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ArtistCard;
