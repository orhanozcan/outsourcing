import React, { useState, createContext, useContext, useCallback } from 'react';
import { loginRequest } from '../api/auth';
import { useToast } from '../contexts/toast';

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const toastMessageStack = useToast();
  const login = useCallback(async (email, password) => {
    setLoading(true);
    const result = await loginRequest(email, password);
    if (result.status === 1) {
      setUser(email)
    }
    toastMessageStack(result.msg)
    setLoading(false);
    return result;
  }, []);

  // const signOut = useCallback(() => {
  //   setUser();
  //   localStorage.removeItem(env.TOKEN_KEY)
  // }, []);

  // const setUserData = useCallback((user) => {
  //   setUser(user);
  // }, []);
  return (
    <AuthContext.Provider value={{ user, loading, login }} {...props} />
  );
}

export function useAuth() {

  return useContext(AuthContext)
}


