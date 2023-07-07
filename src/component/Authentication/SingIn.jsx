import React, { useState, useContext, useRef } from 'react';
import classes from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import AuthContext from '../Context/AuthContext';

function SignIn() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const { updateToken } = useContext(AuthContext);

 

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
   
    setError(false);
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
     console.log(email);
     console.log(password);
    if (isLogin) {
      try {
        setIsLoading(true);
        const response = await commerce.customer.login(email,'http://localhost:3000/login/callback');
        setIsLoading(false);
        console.log(response);
        if (response.success) {
          navigate('/store');
          updateToken(response.email);
        } else {
          setError(true);
        }
      } catch (err) {
        console.log(err);
        return <p>{err.message}</p>
      }
    } else {
      try {
        setIsLoading(true);
        const response = await commerce.customer.create({
          email,
          password,
          type: 'customer',
        });
        setIsLoading(false);
        if (response.customer) {
         
        } else {
          setError(true);
        }
      } catch (err) {
        console.log(err);
        return <p>{err.message}</p>
      }
    }
  };
  if(error) return <p>something went wrong</p>

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={enteredEmail} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" ref={enteredPassword} required />
          </div>
          {error && <p className="text-danger">Authentication failed...</p>}
          <div className={classes.actions}>
            <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
            <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignIn;
