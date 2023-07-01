import React from 'react';
import Cardc from './Card';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import Cards from '../Crads/Cards';

const Home = ({products}) => {
  const classes = useStyles();

  return (
    <div>
          <Cardc />
          <Cards />
        <main className={classes.content}>
         
          <div className={classes.toolbar} />
          <Grid container justifyContent='center' spacing={4}>
          <Typography variant='h3' className={classes.title}>Latest Orders</Typography>
            {products.map((product) =>(
              <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
              </Grid>
            ))}
          </Grid>

        </main>
    </div>
    
  )
}

export default Home;

