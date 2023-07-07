import React, { useState, useEffect, useCallback } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const navigate = useNavigate();

  const setTokenExpiration = useCallback(() => {
    const expirationTime = 5 * 60 * 1000;
    const expirationTimeStamp = Date.now() + expirationTime;
    localStorage.setItem('tokenExpiration', expirationTimeStamp.toString());
  }, []);

  const clearTokenExpiration = useCallback(() => {
    localStorage.removeItem('tokenExpiration');
  }, []);

  const resetTokenExpiration = useCallback(() => {
    clearTokenExpiration();
    setTokenExpiration();
  }, [clearTokenExpiration, setTokenExpiration]);

  const updateToken = useCallback((newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    resetTokenExpiration();
  }, [resetTokenExpiration]);

  const isLoggedIn = !!token;

  const logoutHandler = useCallback(async () => {
    try {
      await commerce.customer.logout();
      localStorage.removeItem('token');
      setToken(null);
      navigate('/signIn');
      clearTokenExpiration();
    } catch (err) {
      console.log(err);
    }
  }, [navigate, clearTokenExpiration]);

  useEffect(() => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const currentTime = Date.now();

    const handleLogout = () => {
      logoutHandler();
    };

    const handleResetExpiration = () => {
      resetTokenExpiration();
    };

    if (tokenExpiration && currentTime >= +tokenExpiration) {
      handleLogout();
    } else {
      handleResetExpiration();
    }
  }, [logoutHandler, resetTokenExpiration]);

  return (
    <AuthContext.Provider value={{ token, updateToken, isLoggedIn, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
