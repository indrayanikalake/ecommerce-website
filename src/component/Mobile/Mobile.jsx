import React, { useContext } from 'react';
import Product from '../HomePage/Home/Product/Product';
import { Grid } from '@material-ui/core';
import { Context } from '../Context/Context';
import useStyles from './styles';

const Mobile = () => {
  const classes = useStyles();
  const { products } = useContext(Context);

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h4 style={{textAlign:'center', background:'white'}} className='headtext__cormorant'>Mobile</h4>
        <Grid container justifyContent="center" spacing={4}>
        <Product product={products[0]} />
        </Grid>
      </main>
    </div>
  );
};

export default Mobile;
