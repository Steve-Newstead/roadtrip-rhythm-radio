
import { Headphones, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  return (
    <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2" onClick={() => navigate("/")} role="button">
          <Headphones size={24} className="text-festival-pink" />
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
          <Button variant="ghost" size="sm" className="rounded-full">How it works</Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="rounded-full flex gap-2">
                  <User size={16} />
                  {user.user_metadata.full_name || 'User'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")}>
                  Create Playlist
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              size="sm" 
              className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white"
              onClick={() => navigate("/auth")}
            >
              Connect with Spotify
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
