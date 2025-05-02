import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Headphones, Loader2, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  useEffect(() => {
    // If user is already authenticated, redirect to home
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSpotifyLogin = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'spotify',
        options: {
          scopes: 'user-read-email playlist-modify-public playlist-modify-private',
          redirectTo: window.location.origin
        }
      });
      
      if (error) {
        throw error;
      }
    } catch (error) {
      toast({
        title: "Authentication error",
        description: error.message || "Failed to sign in with Spotify",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-festival-purple" />
          <p className="text-muted-foreground">Connecting to Spotify...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-900 rounded-3xl shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Headphones size={32} className="text-festival-pink" />
              <div className="music-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Roadtrip Rhythm</h1>
            <p className="text-muted-foreground">Connect with Spotify to create your road trip playlists</p>
          </div>

          <div className="space-y-4">
            <Button 
              className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white gap-2 p-6 text-base"
              onClick={handleSpotifyLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Music className="h-5 w-5" />
              )}
              Connect with Spotify
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>By connecting, you agree to our terms and privacy policy</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
