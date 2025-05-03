
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ArtistCard from "./ArtistCard";
import { ArtistWithDetails } from "@/utils/spotify";

interface StageArtistListProps {
  stageName: string;
  artists: ArtistWithDetails[];
  isMainStage: boolean;
  selectedArtists: string[];
  onArtistToggle: (artistId: string) => void;
}

const StageArtistList = ({ 
  stageName, 
  artists, 
  isMainStage, 
  selectedArtists, 
  onArtistToggle 
}: StageArtistListProps) => {
  const [isExpanded, setIsExpanded] = useState(isMainStage);
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold">{stageName}</h3>
          {isMainStage && (
            <Badge className="bg-festival-pink text-white">Main Stage</Badge>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
      
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.name}
              artist={artist}
              isSelected={selectedArtists.includes(artist.name)}
              onToggle={() => onArtistToggle(artist.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StageArtistList;
