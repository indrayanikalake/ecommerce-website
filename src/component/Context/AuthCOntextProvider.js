import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


const AuthCOntextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);
    const navigate = useNavigate();

    const updateToken = (token) =>{
        setToken(token);
        localStorage.setItem('token',token);
    }

    const isLoggedIn = token === null? false : true;

    const logoutHandler = () =>{
        setToken(null);
        
        localStorage.removeItem('token');
    }
  return (
   <AuthContext.Provider value={{ token, updateToken, isLoggedIn, logoutHandler }}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthCOntextProvider
