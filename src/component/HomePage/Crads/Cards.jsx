import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core';
import React from 'react';
import {men, women, accesories, mobiles} from '../../../assets';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const products= [
{ id: '1', title: 'Men', img: men },
{ id: '2', title: 'Women', img: women },
{ id: '3', title: 'Accessories', img: accesories },
{ id: '4', title: 'Mobiles', img: mobiles }
]

const Cards = () => {
    const classes = useStyles();

  return (
    <main className={classes.content}>
      <h4 className='headtext__cormorant' style={{textAlign:'center'}}>CATEGORY</h4>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={4} gutterBottom>
            {products.map((product) =>(
                <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.root}>
                     <CardMedia className={classes.media} image={product.img} alt='i' title={product.title} />
                     <div className={classes.overlay}>
                     <Typography variant="h4" className={classes.headtext}>
                        {product.title}
                    </Typography>
                    <Button component={Link} to={`/${product.title}`} variant="contained" className={classes.button}>
                      Shop Now
                    </Button>
                    </div>
                  </Card>
                </Grid>
            ))}

        </Grid>

    </main>
  )
}

export default Cards
