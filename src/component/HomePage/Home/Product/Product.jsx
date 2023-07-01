import { Card, CardActions, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';
import { useContext } from 'react';
import { Context } from '../../../Context/Context';

const Product = ({product}) => {
    const classes = useStyles();
    const { handleOnAddCart } = useContext(Context);

  return (
   <Card className={classes.root}>
     <CardMedia className={classes.media} image={product.image.url} />
     <CardContent >
        <div className={classes.cardContent}>
        <Typography variant='h8' >
            {product.name}
        </Typography>
        <Typography variant='h6' >
            {product.price.formatted_with_symbol}
        </Typography>
        </div>
     </CardContent>
     <CardActions  className={classes.cardActions}>
             <IconButton aria-label="Add to Cart"  onClick={()=>handleOnAddCart(product.id,1)}>
               <AddShoppingCart />
             </IconButton>
    </CardActions>
   </Card>
  )
}

export default Product
