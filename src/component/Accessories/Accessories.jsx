import React, { useContext } from 'react';
import Product from '../HomePage/Home/Product/Product';
import { Grid } from '@material-ui/core';
import { Context } from '../Context/Context';
import useStyles from './styles';

const Accessories = () => {
  const classes = useStyles();
  const { products } = useContext(Context);

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h4 style={{textAlign:'center', background:'white'}} className='headtext__cormorant'>Accessories</h4>
        <Grid container justifyContent="center" spacing={4}>
          {products.slice(4,8).map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Accessories;
