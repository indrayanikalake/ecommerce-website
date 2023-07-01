import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';


import useStyles from './styles';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const NavNar = () => {
    const classes=useStyles();
    const { cart } = useContext(Context);
 

  return (
   <>
   <AppBar position='fixed' className={classes.appBar}>
     <Toolbar>
        <Typography  variant='h6' className={classes.title} color='inherit'>
          Home 
          Menu 
          Contact
        </Typography>
        <div className={classes.grow}/>
       
        <div className={classes.button} >
            <IconButton component={Link} to='/cart' aria-label='Show Cart Items' color='inherit'>
                <Badge badgeContent={ cart.total_items} color='secondary'>
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </div>
        
     </Toolbar>
   </AppBar>
   </>
  )
}

export default NavNar
