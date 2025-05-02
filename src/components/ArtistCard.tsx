
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

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
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <Avatar className="h-14 w-14 mr-4 border">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-festival-purple text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-base">{name}</h3>
            <div className="flex items-center text-xs text-muted-foreground mb-1">
              <Navigation size={12} className="mr-1" />
              <span>{location}</span>
            </div>
            {topTrack && (
              <p className="text-xs">
                <span className="text-muted-foreground">Top track:</span> {topTrack}
              </p>
            )}
          </div>
          <Button variant="outline" size="sm" className="shrink-0">
            Play
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
