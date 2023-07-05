import React, { useContext, useRef, useState } from 'react';
import { Grid, Button, Snackbar, TextField, Typography } from '@material-ui/core';
import AuthContext from '../Context/AuthContext';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const newPasswordRef = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { token } = useContext(AuthContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try{
      const enteredPassword = newPasswordRef.current.value;
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDz2JJcOPvQ6aZWZ7JSkBxM2wuUziGzq80',
      {
        method:'POST',
        body: JSON.stringify({
            idToken: token,
            password: enteredPassword,
            returnSecureToken: false
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
      })
      const data =  await response.JSON();
      console.log('op',data);
      console.log(response);
      if(response.ok){
        setIsSubmitted(true);
      }
      else{
        return <p>something went wrong</p>
      }
    }catch(error){
        return <p>{error.message}</p>
    }
    };
  
    const handleSnackbarClose = () => {
      setIsSubmitted(false);
      
    };
  
    return (
      <div className={classes.main}>
         
      <form className={classes.form} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Change Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              minLength={7}
              ref={newPasswordRef}
              label="new Password"     
              className={classes.textField}
            />
          </Grid>
          
         
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
        <form>
        <Snackbar
          open={isSubmitted}
          autoHideDuration={3000}
          message="Form submitted successfully"
          action={
            <Button color="inherit" size="small" onClick={handleSnackbarClose}>
              Close
            </Button>
          }
        />
        </form>
      </form>
      </div>
    )
}

export default ProfileForm
