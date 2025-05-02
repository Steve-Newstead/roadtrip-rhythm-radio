
import { useState } from "react";
import Header from "@/components/Header";
import RouteForm from "@/components/RouteForm";
import Map from "@/components/Map";
import PlaylistGenerator from "@/components/PlaylistGenerator";

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
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-festival-purple to-festival-turquoise text-transparent bg-clip-text">
            Roadtrip Rhythm Radio
          </h1>
          <p className="text-xl text-muted-foreground">
            Create the perfect playlist for your journey to your favorite music festival
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Form */}
          <div className="col-span-1">
            <RouteForm onSubmit={handleFormSubmit} />
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-2 space-y-6">
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
      
      <footer className="border-t py-6 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Roadtrip Rhythm Radio - Festival Playlist Creator</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
