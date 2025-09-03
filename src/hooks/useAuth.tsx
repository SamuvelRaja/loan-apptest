import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AuthContextValue = { isLoggedIn: boolean; signIn: () => void; signOut: () => void };
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signIn = useCallback(() => setIsLoggedIn(true), []);
  const signOut = useCallback(() => setIsLoggedIn(false), []);
  const value = useMemo(() => ({ isLoggedIn, signIn, signOut }), [isLoggedIn, signIn, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
