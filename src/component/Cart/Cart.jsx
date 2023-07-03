import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const Cart = () => {
    const classes=useStyles();
    const { cart, isLoading, error, handleEmptyCart } = useContext(Context);

    const EmptyCart=()=>(
        <Typography variant='h4'>You have no items in your cart
        <Link to='/' className={classes.link}>Please add some</Link>
        </Typography>
    );

    const FilledCart=()=>(
        <>
        <Grid container spacing={3} className={classes.contend}>
             {cart.line_items.map((item)=>(
              <Grid xs={12} sm={12} key={item.id}>
               <CartItem item={item} />
                </Grid>
             ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'> Subtotal:{cart.subtotal.formatted_with_symbol}</Typography> 
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained'
                color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained'
                color='primary'>Checkout</Button>
            </div>
        </div>
        </>
    )

  return (
   <Container>
    <div className={classes.toolbar} />
     <Typography className={classes.title} variant='h3' gutterBottom>Your Cart</Typography>
     {!isLoading && !error && (cart.line_items ? <FilledCart /> : <EmptyCart />)}
      {error && ( 
      <>
      <Typography variant='h6'>Something went wrong.....Retrying</Typography>
      <Button component={Link} to='/'>Stop</Button>
      </>)}
      {isLoading && !error && <Typography>Loading...</Typography>}
   </Container>
  )
}

export default Cart
