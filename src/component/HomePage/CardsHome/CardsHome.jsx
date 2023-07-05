import { Grid, Card, Typography, Button } from '@material-ui/core';
import React from 'react';
import {  show, astrology, sports, movies } from '../../../assets';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', title: 'Gnerics', video: show },
  { id: '2', title: 'Astrology', video: astrology },
  { id: '3', title: 'Sports',video: sports },
  { id: '4', title: 'Movies', video: movies}
];

const CardsHome = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <h4 className='headtext__cormorant' style={{ textAlign: 'center' }}>Book Now</h4>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4} gutterBottom>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
              <div className={classes.media}>
                <video className={classes.video} autoPlay loop muted>
                  <source src={product.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={classes.overlay}>
                <Typography variant="h4" className={classes.headtext}>
                  {product.title}
                </Typography>
                <Button component={Link} to={`/${product.id}`} variant="contained" className={classes.button}>
                  Book Now
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default CardsHome;
