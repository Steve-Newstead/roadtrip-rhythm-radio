
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { festivals } from "@/data/festivals";

interface RouteFormProps {
  onSubmit: (data: {
    festival: string;
    tripDuration: number;
  }) => void;
}

const RouteForm = ({ onSubmit }: RouteFormProps) => {
  const [festival, setFestival] = useState("");
  const [tripDurationHours, setTripDurationHours] = useState("2");
  const [tripDurationMinutes, setTripDurationMinutes] = useState("0");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!festival) {
      toast({
        title: "Festival selection required",
        description: "Please select a festival",
        variant: "destructive"
      });
      return;
    }
    
    // Parse trip duration as number
    const hours = parseInt(tripDurationHours, 10) || 0;
    const minutes = parseInt(tripDurationMinutes, 10) || 0;
    const totalMinutes = (hours * 60) + minutes;
    
    if (totalMinutes <= 0) {
      toast({
        title: "Invalid trip duration",
        description: "Please enter a valid trip duration",
        variant: "destructive"
      });
      return;
    }
    
    const selectedFestival = festivals.find(f => 
      f.festival_name.toLowerCase().replace(/\s+/g, '') === festival.toLowerCase()
    );
    
    if (selectedFestival) {
      onSubmit({
        festival,
        tripDuration: totalMinutes
      });
    }
  };

  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-festival-purple to-festival-blue p-4">
        <h2 className="text-white text-xl font-bold">Festival Roadtrip Playlist</h2>
        <p className="text-white/80 text-sm">
          Enter your travel time and we'll create the perfect playlist for your journey
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5 p-5">
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
                {festivals.map((fest) => (
                  <SelectItem 
                    key={fest.festival_name.toLowerCase().replace(/\s+/g, '')} 
                    value={fest.festival_name.toLowerCase().replace(/\s+/g, '')}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span>{fest.festival_name}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(fest.start_date).toLocaleDateString()} - {new Date(fest.end_date).toLocaleDateString()}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-medium flex items-center gap-2">
              <Clock size={16} className="text-festival-pink" />
              <span>Your Travel Time</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Input
                  id="durationHours"
                  type="number"
                  placeholder="Hours"
                  value={tripDurationHours}
                  onChange={(e) => setTripDurationHours(e.target.value)}
                  min="0"
                  className="rounded-full border-2 focus-visible:border-festival-purple focus-visible:ring-festival-purple"
                />
                <p className="text-xs text-center mt-1 text-muted-foreground">Hours</p>
              </div>
              <div>
                <Input
                  id="durationMinutes"
                  type="number"
                  placeholder="Minutes"
                  value={tripDurationMinutes}
                  onChange={(e) => setTripDurationMinutes(e.target.value)}
                  min="0"
                  max="59"
                  className="rounded-full border-2 focus-visible:border-festival-purple focus-visible:ring-festival-purple"
                />
                <p className="text-xs text-center mt-1 text-muted-foreground">Minutes</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Calculate your journey time (by car, train, etc.) to the festival
            </p>
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
