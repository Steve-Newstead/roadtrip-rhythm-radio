
import { Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2" onClick={() => navigate("/")} role="button">
          <Route size={24} className="text-festival-purple" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-none tracking-tight">Roadtrip Rhythm</h1>
            <span className="text-xs text-muted-foreground">Festival Playlist Creator</span>
          </div>
          <div className="music-wave ml-2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">How it works</Button>
          <Button size="sm">Create Playlist</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
