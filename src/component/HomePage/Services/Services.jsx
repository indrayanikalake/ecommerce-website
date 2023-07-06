import React from 'react';
import { Typography,  Grid } from '@material-ui/core';
import useStyles from './styles';

const services = [
  {
   title:'Free Shipping' ,
   details:'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.'
  },
  {
    title:'100% Money Back' ,
   details:'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.'
  
  },
  {
    title:'Online Support 24/7' ,
   details:'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.'
  },
  
];

const Services = () => {
    const classes = useStyles();
  return (
    <div >
      
      <h4 className='headtext__cormorant'style={{textAlign:'center', textTransform:'uppercase'}}>Our Service</h4>
      <Grid container jusifyContent='center' spacing={4} className={classes.tours}>
       
        {services.map((service, index) => (
          <Grid key={index} className={classes.tour} xs={12} sm={6} md={4} lg={3} >
            <Typography variant='h2' className={classes.tour_date}>{service.title}</Typography>
           
            <Typography variant='h6' className={classes.tour_location}>{service.details}</Typography>
           
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Services;
