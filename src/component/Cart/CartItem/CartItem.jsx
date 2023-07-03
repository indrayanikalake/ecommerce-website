import React from 'react';
import {Card, CardContent, CardMedia, CardActions, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

const CartItem = ({item }) => {
    const classes =useStyles();
    const { products, handleUpdateCartQty, handleRemoveFromCart } = useContext(Context);

    const product = products.find(product=>product.id===item.product_id);
  return (
    <div className={classes.main}>
   <Card className={classes.cart}>
    <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
    <CardContent className={classes.cardContent}>
        <Typography variant='h6'>{item.name}</Typography>
        <Typography variant='h8'>{item.line_total.formatted_with_symbol}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
            <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id,item.quantity-1)}>-</Button>
            <Typography>{item.quantity}</Typography>
            <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id,item.quantity+1)}>+</Button>
        </div>
        <Button variant='contained' type='button' color='secondary' onClick={() =>handleRemoveFromCart(item.id)}>Remove</Button>
    </CardActions>
   </Card>
   {product && (
     <Typography className={classes.description} dangerouslySetInnerHTML={{__html:product.description}} variant='h6'  />
   )}
   
   </div>
  )
}

export default CartItem
