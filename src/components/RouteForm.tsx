
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MapPin, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";

const FESTIVALS = [
  { id: 'glastonbury', name: 'Glastonbury Festival', location: 'Pilton, UK' },
  { id: 'coachella', name: 'Coachella', location: 'Indio, California' },
  { id: 'tomorrowland', name: 'Tomorrowland', location: 'Boom, Belgium' },
  { id: 'rockwerchter', name: 'Rock Werchter', location: 'Werchter, Belgium' },
  { id: 'lollapalooza', name: 'Lollapalooza', location: 'Chicago, Illinois' },
];

interface RouteFormProps {
  onSubmit: (data: {
    startLocation: string;
    endLocation: string;
    festival: string;
  }) => void;
}

const RouteForm = ({ onSubmit }: RouteFormProps) => {
  const [startLocation, setStartLocation] = useState("");
  const [festival, setFestival] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startLocation) {
      toast({
        title: "Starting point required",
        description: "Please enter your starting location",
        variant: "destructive"
      });
      return;
    }
    
    if (!festival) {
      toast({
        title: "Festival selection required",
        description: "Please select a festival",
        variant: "destructive"
      });
      return;
    }
    
    const selectedFestival = FESTIVALS.find(f => f.id === festival);
    
    if (selectedFestival) {
      onSubmit({
        startLocation,
        endLocation: selectedFestival.location,
        festival
      });
    }
  };

  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-festival-purple to-festival-blue p-4">
        <h2 className="text-white text-xl font-bold">Create Your Festival Journey</h2>
        <p className="text-white/80 text-sm">
          Get the perfect playlist for your road trip
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5 p-5">
          <div className="space-y-2">
            <label htmlFor="start" className="text-sm font-medium flex items-center gap-2">
              <MapPin size={16} className="text-festival-pink" />
              <span>Starting Location</span>
            </label>
            <Input
              id="start"
              placeholder="Enter your starting point"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              className="rounded-full border-2 focus-visible:border-festival-purple focus-visible:ring-festival-purple"
            />
          </div>
          
          <div className="flex items-center justify-center my-2">
            <div className="w-full h-px bg-border"></div>
            <ArrowRight className="mx-2 text-muted-foreground" size={16} />
            <div className="w-full h-px bg-border"></div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="festival" className="text-sm font-medium flex items-center gap-2">
              <Music size={16} className="text-festival-blue" />
              <span>Select Festival</span>
            </label>
            <Select onValueChange={setFestival} value={festival}>
              <SelectTrigger className="rounded-full border-2 focus:border-festival-purple focus:ring-festival-purple">
                <SelectValue placeholder="Choose a festival" />
              </SelectTrigger>
              <SelectContent>
                {FESTIVALS.map((fest) => (
                  <SelectItem key={fest.id} value={fest.id} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span>{fest.name}</span>
                      <span className="text-xs text-muted-foreground">{fest.location}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full rounded-full bg-gradient-to-r from-festival-pink to-festival-purple hover:opacity-90 transition-opacity"
          >
            Generate Festival Playlist
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default RouteForm;
