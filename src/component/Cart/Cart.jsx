import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Product from '../HomePage/Home/Product/Product';
import useStyles from './styles';

const Cart = ({products}) => {
    const classes = useStyles();
  return (
    <main className={classes.content}>
         
          <div className={classes.toolbar} />
          <Grid container  spacing={4}>
          <Typography variant='h3' className={classes.title}>Latest Orders</Typography>
            {products.slice(2,4).map((product) =>(
                <div className={classes.cartItems}>
              <Grid key={product.id} xs={12} sm={12} md={12} lg={12}>
                <Product product={product}/>
              </Grid>
              <Typography className={classes.description} dangerouslySetInnerHTML={{__html:product.description}} variant='h5' color='textprimary' />
               </div>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant='h4'> Subtotal:'0'</Typography> 
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained'
                color='secondary' >Empty Cart</Button>
                <Button  className={classes.checkoutButton} size='large' type='button' variant='contained'
                color='primary'>Checkout</Button>
            </div>
        </div>
    </main>
  )
}

export default Cart
