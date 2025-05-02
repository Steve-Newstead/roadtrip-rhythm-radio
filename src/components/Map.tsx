
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MapProps {
  startLocation?: string;
  endLocation?: string;
  artistLocations?: Array<{
    id: string;
    name: string;
    location: string;
    lat: number;
    lng: number;
  }>;
}

const Map = ({ startLocation, endLocation, artistLocations }: MapProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would initialize a maps API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardContent className="p-0 relative">
        {isLoading ? (
          <div className="w-full h-[400px] bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="music-wave mb-4 mx-auto">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-[400px] bg-gradient-radial from-festival-blue/10 to-festival-purple/20 relative">
            {/* Map visualization placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              {!startLocation && !endLocation ? (
                <div className="text-center p-4">
                  <p className="font-medium">Enter your journey details to see the map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll create a route and find artists along the way
                  </p>
                </div>
              ) : (
                <div className="text-center p-4">
                  <p className="font-medium">Route from {startLocation} to {endLocation}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {artistLocations ? 
                      `Found ${artistLocations.length} artists along your route` :
                      'Searching for artists along your route...'}
                  </p>
                </div>
              )}
            </div>
            
            {/* Route visualization would be added here with an actual maps API */}
            {startLocation && endLocation && (
              <>
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-md text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-festival-blue"></div>
                    <span>{startLocation}</span>
                  </div>
                  <div className="w-[1px] h-4 bg-border ml-1.5 my-1"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-festival-pink"></div>
                    <span>{endLocation}</span>
                  </div>
                </div>
                
                {/* Visual line connecting points */}
                <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-festival-purple/40 rounded-full transform -translate-y-1/2"></div>
                
                {/* Start point */}
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-festival-blue rounded-full transform -translate-y-1/2 -translate-x-1/2 border-2 border-white"></div>
                
                {/* End point */}
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-festival-pink rounded-full transform -translate-y-1/2 translate-x-1/2 border-2 border-white"></div>
                
                {/* Artist points (placeholders) */}
                {artistLocations && artistLocations.map((artist, index) => {
                  // Distribute points along the path for visualization
                  const position = 25 + (50 / (artistLocations.length + 1)) * (index + 1);
                  return (
                    <div 
                      key={artist.id}
                      className="absolute top-1/2 w-3 h-3 bg-festival-turquoise rounded-full transform -translate-y-1/2 border-2 border-white cursor-pointer"
                      style={{ left: `${position}%` }}
                      title={artist.name}
                    ></div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Map;
