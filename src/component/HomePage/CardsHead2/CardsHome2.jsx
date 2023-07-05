import { Grid, Card, CardMedia } from '@material-ui/core';
import React from 'react';
import {electronics, clothesBrand,  cosmeticsBrand, music} from '../../../assets';
import useStyles from './styles';


const products= [
{ id: '1', title: 'Men', img: clothesBrand },
{  id: '2', title: 'Women', img: electronics },
{ id: '3', title: 'Women', img: cosmeticsBrand },
{ id: '4', title: 'Women', img: music },

]

const CardsHead2 = () => {
    const classes = useStyles();

  return (
    <main className={classes.content}>
      <h4 className='headtext__cormorant' style={{textAlign:'center'}}>Top Brands</h4>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={4} gutterBottom>
            {products.map((product) =>(
                <Grid key={product.id} xs={12} sm={12} md={4} lg={3}>
                  <Card className={classes.root}>
                     <CardMedia className={classes.media} image={product.img} alt='i' title={product.title} />
                  </Card>
                </Grid>
            ))}

        </Grid>

    </main>
  )
}

export default CardsHead2;
