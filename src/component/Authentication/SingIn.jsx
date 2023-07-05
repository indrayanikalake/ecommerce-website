import React,{useState,useRef, useContext} from 'react';
import classes from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';



function SignIn() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(false);
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };
      const { updateToken } = useContext(AuthContext);
    
      const submitHandler = async(e)=>{
        e.preventDefault()
        setError(false)
        const email = enteredEmail.current.value;
        const password = enteredPassword.current.value;

        if(isLogin){

          try{
    
            setIsLoading(true)
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz2JJcOPvQ6aZWZ7JSkBxM2wuUziGzq80',{
              method:'POST',
              body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type':'application/json'
              }
            })
            setIsLoading(false)
           if(response.ok){
           navigate('/store');

           }else{
           setError(true);
            return;
           }

           const data = await response.json()
           console.log(data)
           localStorage.setItem('token',data.idToken)
           updateToken(data.idToken);

          }catch(err){
            console.log(err)

          }
        }else{

          try{
           
            setIsLoading(true)
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz2JJcOPvQ6aZWZ7JSkBxM2wuUziGzq80',{
              method:'POST',
              body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
              }),
              headers:{
                'Content-Type':'application/json'
              }
            })
            setIsLoading(false)
            if(response.ok){


             }else{
              setError(true)
             }

          }catch(err){
            console.log(err)
          }
        }
      }
  return (
    <div> {isLoading && <p>Loading...</p>}
    <section className={classes.auth}>

    <h1>{isLogin ? "Login" : "Sign Up"}</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" ref={enteredEmail} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" ref={enteredPassword} required />

      </div>
      {error && <p className='text-danger'>Authantication failed ...</p>}
      <div className={classes.actions}>

        <button

          type="submit">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        <button
          type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </div>
    </form>
  </section>
  </div>
  )
}

export default SignIn;