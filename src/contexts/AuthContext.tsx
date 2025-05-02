import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { spotifyApi } from "@/utils/spotify";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  spotifyAuth: {
    accessToken: string | null;
    refreshToken: string | null;
  };
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
  signOut: async () => {},
  spotifyAuth: {
    accessToken: null,
    refreshToken: null,
  },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [spotifyAuth, setSpotifyAuth] = useState({
    accessToken: null,
    refreshToken: null,
  });

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
        
        if (currentSession.provider_token) {
          setSpotifyAuth({
            accessToken: currentSession.provider_token,
            refreshToken: currentSession.provider_refresh_token || null,
          });
          spotifyApi.setAccessToken(currentSession.provider_token);
        }
      }
      setIsLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.provider_token) {
          setSpotifyAuth({
            accessToken: currentSession.provider_token,
            refreshToken: currentSession.provider_refresh_token || null,
          });
          spotifyApi.setAccessToken(currentSession.provider_token);
        } else {
          setSpotifyAuth({
            accessToken: null,
            refreshToken: null,
          });
          spotifyApi.setAccessToken(null);
        }
        
        setIsLoading(false);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSpotifyAuth({
        accessToken: null,
        refreshToken: null,
      });
      spotifyApi.setAccessToken(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    session,
    user,
    isLoading,
    signOut,
    spotifyAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
