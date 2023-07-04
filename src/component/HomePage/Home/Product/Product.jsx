import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const classes = useStyles();
  

  return (
   <Card className={classes.root}>
    
  <CardMedia component={Link} to={`/${product.id}`} className={classes.media} image={product.image.url} />


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
   </Card>
  )
}

export default Product
