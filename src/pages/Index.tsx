
import { useState } from "react";
import Header from "@/components/Header";
import RouteForm from "@/components/RouteForm";
import Map from "@/components/Map";
import PlaylistGenerator from "@/components/PlaylistGenerator";
import { MapPin, Music } from "lucide-react";

const MOCK_ARTIST_LOCATIONS = [
  { id: "1", name: "Coldplay", location: "London, UK", lat: 51.5074, lng: -0.1278 },
  { id: "2", name: "Mumford & Sons", location: "London, UK", lat: 51.5074, lng: -0.1278 },
  { id: "3", name: "The Killers", location: "Las Vegas, Nevada", lat: 36.1699, lng: -115.1398 },
  { id: "4", name: "Florence and the Machine", location: "London, UK", lat: 51.5074, lng: -0.1278 },
  { id: "5", name: "Elbow", location: "Manchester, UK", lat: 53.4808, lng: -2.2426 }
];

const Index = () => {
  const [route, setRoute] = useState<{
    startLocation: string;
    endLocation: string;
    festival: string;
  } | null>(null);
  
  const [artistLocations, setArtistLocations] = useState<typeof MOCK_ARTIST_LOCATIONS | null>(null);
  
  const handleFormSubmit = (data: {
    startLocation: string;
    endLocation: string;
    festival: string;
  }) => {
    setRoute(data);
    
    // Simulate API call to get artists
    setTimeout(() => {
      setArtistLocations(MOCK_ARTIST_LOCATIONS);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8 px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-muted/50 px-4 py-2 rounded-full text-sm">
            <Music size={16} className="text-festival-pink" />
            <span>Discover artists along your journey</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gradient leading-tight">
            Roadtrip Rhythm Radio
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
            <h3 className="font-bold">Roadtrip Rhythm Radio</h3>
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
