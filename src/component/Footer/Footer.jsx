import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.main}>
     <h2 className='headtext__cormorant' style={{margin:'0 10rem'}}>Izara Avara</h2>
      <Grid  xs={12} sm={6} md={4} className={classes.mainContent}>
        <Card className={classes.subContent}>
            <Typography variant='h4' style={{color:'white'}}>Customer Care</Typography>
            <Typography variant='body2'>Search</Typography>
            <Typography variant='body4'>Privacy Policy</Typography>
            <Typography variant='body4'>2022 Lookbook</Typography>
            <Typography variant='body4'>Shipping and Delivery</Typography>
            <Typography variant='body4'>Gallary</Typography>
        </Card>
        <Card className={classes.subContent}>
            <Typography variant='h4'style={{color:'white'}}>Services</Typography>
            <Typography variant='body4'>Free Shipping </Typography>
            <Typography variant='body4'>Free Returns </Typography>
            <Typography variant='body4'>Our Franchising</Typography>
            <Typography variant='body4'>Terms and Conditions</Typography>
            <Typography variant='body4'>Privacy Policy</Typography>
        </Card>
        <Card className={classes.subContent}>
            <Typography variant='h4'style={{color:'white'}}>Information</Typography>
            <Typography variant='body4'>Payment Methods</Typography>
            <Typography variant='body4'>Times and Shipping Costs</Typography>
            <Typography variant='body4'>Product Returns</Typography>
            <Typography variant='body4'>Shipping Methods</Typography>
            <Typography variant='body4'>Confirmity of the Products</Typography>
        </Card>
      </Grid>
      <ul className={classes.logo}>
      <li ><a href=""><i class="fa fa-facebook-square">Facebook</i></a></li>
      <li><a href=""><i class="fa fa-twitter" style={{marginLeft:'2rem'}}>Twitter</i></a></li>
      <li><a href=""><i class="fa fa-google-plus-square" style={{marginLeft:'2rem'}}>Google</i></a></li>
      <li><a href=""><i class="fa fa-instagram" style={{marginLeft:'2rem'}}>Instagram</i></a></li>
      <li><a href=""><i class="fa fa-pinterest" style={{marginLeft:'2rem'}}>Printerest</i></a></li>
      </ul>
    </Grid>
  )
}

export default Footer
