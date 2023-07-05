import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


const AuthCOntextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const updateToken = (token) =>{
        setToken(token);
    }

    const isLoggedIn = token === null? false : true;

    const logoutHandler = () =>{
        setToken(null);
        navigate('/signIn');
        localStorage.removeItem(token);
    }
  return (
   <AuthContext.Provider value={{ token, updateToken, isLoggedIn, logoutHandler }}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthCOntextProvider
