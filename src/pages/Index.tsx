
import { useState } from "react";
import Header from "@/components/Header";
import RouteForm from "@/components/RouteForm";
import Map from "@/components/Map";
import PlaylistGenerator from "@/components/PlaylistGenerator";
import { MapPin, Music } from "lucide-react";

const Index = () => {
  const [route, setRoute] = useState<{
    startLocation: string;
    endLocation: string;
    festival: string;
    tripDuration: number; // in minutes
  } | null>(null);
  
  const [artistLocations, setArtistLocations] = useState<any[] | null>(null);
  
  const handleFormSubmit = (data: {
    startLocation: string;
    endLocation: string;
    festival: string;
    tripDuration: number;
  }) => {
    setRoute(data);
    
    // Clear any previous artist locations when selecting a new festival
    setArtistLocations([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8 px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-muted/50 px-4 py-2 rounded-full text-sm">
            <Music size={16} className="text-festival-pink" />
            <span>Perfect length playlists for your journey</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gradient leading-tight">
            Roadtrip Radio
          </h1>
          <p className="text-xl text-muted-foreground">
            Create the perfect playlist for your journey to your favorite music festival
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="col-span-1">
            <RouteForm onSubmit={handleFormSubmit} />
            
            {route && (
              <div className="mt-6 p-4 bg-muted/30 rounded-3xl">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="mt-1 text-festival-pink" />
                  <div>
                    <span className="text-xs text-muted-foreground">Starting point</span>
                    <p className="font-medium">{route.startLocation}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Music size={16} className="mt-1 text-festival-blue" />
                  <div>
                    <span className="text-xs text-muted-foreground">Destination</span>
                    <p className="font-medium">{route.endLocation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-2 space-y-8">
            <Map 
              startLocation={route?.startLocation} 
              endLocation={route?.endLocation}
              artistLocations={artistLocations || undefined}
            />
            
            <PlaylistGenerator 
              startLocation={route?.startLocation}
              endLocation={route?.endLocation}
              festival={route?.festival}
              tripDuration={route?.tripDuration}
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t py-8 mt-12 bg-white dark:bg-slate-900">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="music-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3 className="font-bold">Roadtrip Radio</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            The perfect playlist for your festival road trip journey
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
