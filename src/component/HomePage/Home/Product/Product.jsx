import { Card, CardActions, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();

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
             <IconButton aria-label="Add to Cart" >
               <AddShoppingCart />
             </IconButton>
    </CardActions>
   </Card>
  )
}

export default Product
