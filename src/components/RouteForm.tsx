
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Your Festival Journey</CardTitle>
        <CardDescription>
          Generate a playlist based on artists from locations along your route to the festival
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="start" className="text-sm font-medium">
              Starting Location
            </label>
            <Input
              id="start"
              placeholder="Enter your starting point"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-center my-2">
            <div className="w-full h-px bg-border"></div>
            <ArrowRight className="mx-2 text-muted-foreground" size={16} />
            <div className="w-full h-px bg-border"></div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="festival" className="text-sm font-medium">
              Select Festival
            </label>
            <Select onValueChange={setFestival} value={festival}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a festival" />
              </SelectTrigger>
              <SelectContent>
                {FESTIVALS.map((fest) => (
                  <SelectItem key={fest.id} value={fest.id}>
                    {fest.name} - {fest.location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Generate Festival Playlist
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RouteForm;
