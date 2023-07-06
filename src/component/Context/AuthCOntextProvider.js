import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


const AuthCOntextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const navigate = useNavigate();

    const updateToken = (newToken) =>{
        setToken(newToken);
        localStorage.setItem('token',newToken);
        resetTokenExpiration();
    }

    const isLoggedIn = !!token;

    const logoutHandler = () =>{
        setToken(null);
        navigate('/signIn');
        localStorage.removeItem('token');
        clearTokenExpiration();
    }

    const setTokenExpiration = () =>{
          const expirationTime = 5*60*1000;
          const expirationTimeStamp = Date.now() + expirationTime ;
          localStorage.setItem('tokenExpiration',expirationTimeStamp.toString());
    }

    const clearTokenExpiration = () =>{
        localStorage.removeItem('tokenExpiration');
    }

    const resetTokenExpiration = () =>{
        clearTokenExpiration();
        setTokenExpiration();
    }

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
  )
}

export default AuthCOntextProvider