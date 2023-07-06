import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import Cards from '../Crads/Cards';
import { useContext } from 'react';
import { Context } from '../../Context/Context';


const Store = () => {
  const classes = useStyles();
  const { products } = useContext(Context);

  return (
    <div>
          <Cards />
          <div className={classes.head}>
          <h4 className='headtext__cormorant' style={{textAlign:'center'}}>Latest Orders</h4>
        <main className={classes.content}>
        
          <div className={classes.toolbar} />
          
          <Grid container justifyContent='center' spacing={4}>
         
            {products.slice(0,8).map((product) =>(
              <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
              </Grid>
            ))}
          </Grid>

        </main>
        </div>
    </div>
    
  )
}

export default Store;

