
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";

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
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.provider_token) {
          setSpotifyAuth({
            accessToken: currentSession.provider_token,
            refreshToken: currentSession.provider_refresh_token || null,
          });
        } else {
          setSpotifyAuth({
            accessToken: null,
            refreshToken: null,
          });
        }
        
        setIsLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.provider_token) {
        setSpotifyAuth({
          accessToken: currentSession.provider_token,
          refreshToken: currentSession.provider_refresh_token || null,
        });
      }
      
      setIsLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
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
