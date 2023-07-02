import React from 'react';
import { concerts } from '../../assets';
import { Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

const tours = [
  {
    date: 'July 16',
    place: 'DETROIT, MI',
    location: 'Date Energy Music Theatre',
  },
  {
    date: 'July 19',
    place: 'TORONTO ON',
    location: 'Budweiser Stage',
  },
  {
    date: 'July 22',
    place: 'BRISTAW, VA',
    location: 'Jiggy Lube Live',
  },
  {
    date: 'July 29',
    place: 'PHOENIX, AZ',
    location: 'AK-Chin Pavilion',
  },
  {
    date: 'Aug 2',
    place: 'LAS VEGAS,NV',
    location: 'T Mobile Arina',
  },
  {
    date: 'Aug 7',
    place: 'CONCORD,CA',
    location: 'Concord Pavilion',
  },
];

const Generics = () => {
    const classes = useStyles();
  return (
    <div >
      <div className={classes.slides}>
        <video  className={classes.video} src={concerts} type='video/mp4' autoPlay={true} loop muted width='100%' />
        <div className={classes.slides_overlay}>
          <h4 className='headtext__cormorant'>The Generics</h4>
          <p className='p__cormorant'>Get our latest Album</p>
        </div>
      </div>
      <h4 className='headtext__cormorant'style={{textAlign:'center', textTransform:'uppercase'}}>Tours</h4>
      <Grid container jusifyContent='center' spacing={4} className={classes.tours}>
       
        {tours.map((tour, index) => (
          <Grid key={index} className={classes.tour} xs={12} sm={6} md={4} lg={3} >
            <Typography variant='h6' className={classes.tour_date}>{tour.date}</Typography>
            <Typography variant='h6' className={classes.tour_place}>{tour.place}</Typography>
            <Typography variant='subtitle1' className={classes.tour_location}>{tour.location}</Typography>
            <Button variant='contained' color='primary' className={classes.tour_button}>Buy Tickets</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Generics;
