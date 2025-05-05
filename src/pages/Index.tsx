import { useState } from "react";
import Header from "@/components/Header";
import RouteForm from "@/components/RouteForm";
import PlaylistGenerator from "@/components/PlaylistGenerator";
import { Music, Clock } from "lucide-react";

const Index = () => {
  const [route, setRoute] = useState<{
    festival: string;
    tripDuration: number; // in minutes
  } | null>(null);
  
  const handleFormSubmit = (data: {
    festival: string;
    tripDuration: number;
  }) => {
    setRoute(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8 px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-muted/50 px-4 py-2 rounded-full text-sm">
            <Music size={16} className="text-festival-pink" />
            <span>Perfect length playlists for your festival journey</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gradient leading-tight">
            Roadtrip Radio
          </h1>
          <p className="text-xl text-muted-foreground">
            Create the perfect playlist that matches the exact duration of your festival trip
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="col-span-1">
            <RouteForm onSubmit={handleFormSubmit} />
            
            {route && (
              <div className="mt-6 p-4 bg-muted/30 rounded-3xl">
                <div className="flex items-start gap-2">
                  <Clock size={16} className="mt-1 text-festival-purple" />
                  <div>
                    <span className="text-xs text-muted-foreground">Travel duration</span>
                    <p className="font-medium">
                      {Math.floor(route.tripDuration / 60)} hours {route.tripDuration % 60} minutes
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-8">
            {route && (
              <div className="p-6 bg-muted/20 rounded-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-festival-purple" />
                  <h2 className="text-xl font-semibold">Journey Details</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Festival:</span>
                    <span className="font-medium">{route.festival.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Estimated travel time:</span>
                    <span className="font-medium bg-festival-purple/10 text-festival-purple px-3 py-1 rounded-full">
                      {Math.floor(route.tripDuration / 60)} hours {route.tripDuration % 60} minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total playlist duration needed:</span>
                    <span className="font-medium">{route.tripDuration} minutes</span>
                  </div>
                </div>
              </div>
            )}
            
            <PlaylistGenerator 
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
