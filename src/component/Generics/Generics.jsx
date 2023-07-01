import React from 'react';
import { concerts } from '../../assets';
import { Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const tours = [
  {
    date: 'July 10, 2023',
    place: 'ABC Arena',
    location: 'New York, NY',
  },
  {
    date: 'July 15, 2023',
    place: 'XYZ Stadium',
    location: 'Los Angeles, CA',
  },
  // Add more tours as needed
];

const Generics = () => {
    const classes = useStyles();
  return (
    <div >
      <div className={classes.slides}>
        <video src={concerts} type='video/mp4' autoPlay={true} loop muted width='100%' />
        <div className={classes.slides_overlay}>
          <h4 className='headtext__cormorant'>The Generics</h4>
          <p className='p__cormorant' style={{ marginTop: '6rem', marginLeft: '-16rem' }}>Get our latest Album</p>
          <button  className='custom__button' style={{ marginTop: '12rem', marginLeft: '-16rem' }}>Buy Now</button>
        </div>
      </div>

      <div className={classes.tours}>
        {tours.map((tour, index) => (
          <div key={index} className={classes.tour}>
            <Typography variant='h6' className={classes.tour_date}>{tour.date}</Typography>
            <Typography variant='h6' className={classes.tour_place}>{tour.place}</Typography>
            <Typography variant='subtitle1' className={classes.tour_location}>{tour.location}</Typography>
            <Button variant='contained' color='primary' className={classes.tour_button}>Buy Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Generics;
