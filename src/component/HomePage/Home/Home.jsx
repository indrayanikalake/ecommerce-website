import React from 'react';
import Cardc from './Card';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import Cards from '../Crads/Cards';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import Footer from '../../Footer/Footer';

const Home = () => {
  const classes = useStyles();
  const { products } = useContext(Context);

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
        <Footer />
    </div>
    
  )
}

export default Home;

