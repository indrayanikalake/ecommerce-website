import React, { useState } from 'react';
import {TextField, Button, Grid, Typography, Snackbar } from '@material-ui/core';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSnackbarClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setNumber(0);
    setMessage('');
  };

  return (
    <div className={classes.main}>
       <div className={classes.contact}>
        <Typography variant='h2'>Contact</Typography>
        <Typography variant='h4'>Address</Typography>
        <Typography variant='body6'>Somcnvk xmncjsdk, dhfjsd ,dbsdjd,404334</Typography>
        <Typography variant='h4'>Email Adress</Typography>
        <Typography variant='body6'>info@gmail.com</Typography>
        <Typography variant='h4'>Phone No</Typography>
        <Typography variant='body6'>+91 4768464387</Typography>
       </div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Contact Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Phone No"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
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
  );
};

export default Contact;
