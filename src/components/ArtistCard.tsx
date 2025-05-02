
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BadgePlus, Play } from "lucide-react";
import { Badge } from "./ui/badge";

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    location: string;
    imageUrl?: string;
    topTrack?: string;
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const { name, location, imageUrl, topTrack } = artist;
  
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="album-card border-0 shadow-md group">
      <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/30 overflow-hidden">
        <Avatar className="h-full w-full rounded-none">
          <AvatarImage 
            src={imageUrl} 
            alt={name} 
            className="object-cover h-full w-full transition-transform group-hover:scale-110"
          />
          <AvatarFallback className="bg-gradient-to-br from-festival-purple to-festival-blue text-white text-4xl h-full w-full rounded-none">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="font-bold text-lg tracking-tight">{name}</h3>
          <p className="text-sm opacity-90">{location}</p>
        </div>
        <Button 
          size="icon" 
          variant="secondary" 
          className="absolute right-3 bottom-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black hover:bg-white/90"
        >
          <Play className="h-4 w-4 fill-current" />
        </Button>
      </div>
      <div className="album-card-content flex items-center justify-between">
        {topTrack && (
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Top track</span>
            <span className="font-medium truncate max-w-[180px]">{topTrack}</span>
          </div>
        )}
        <Button variant="ghost" size="sm" className="rounded-full">
          <BadgePlus className="h-4 w-4 mr-1" />
          <span>Add</span>
        </Button>
      </div>
    </Card>
  );
};

export default ArtistCard;
