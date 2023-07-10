import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import { Context } from '../Context/Context';
import AuthContext from '../Context/AuthContext';

const NavNar = () => {
    const classes=useStyles();
    const { cart } = useContext(Context);
    const { isLoggedIn } = useContext(AuthContext);

  return (
   <>
   <div  className={classes.appBar}>
     <Toolbar >
        <AppBar className={classes.heading}>
        <Typography component={NavLink} to='/'  variant='h4' className={classes.title} color='inherit'>
          Home 
        </Typography>
        <Typography component={NavLink} to='/about' variant='h4' className={classes.title} color='inherit'>
          About 
        </Typography>
        <Typography component={NavLink} to='/contact' variant='h4' className={classes.title} color='inherit'>
          contact
        </Typography>
        </AppBar>
        <div className={classes.grow}/>
       
        <div className={classes.button} >
            { isLoggedIn && (
            <IconButton component={NavLink} to='/cart' aria-label='Show Cart Items' color='inherit'>
                <Badge badgeContent={ cart.total_items} color='secondary'>
                    <ShoppingCart />
                </Badge>
            </IconButton>
            )}
        </div>
        
     </Toolbar>
   </div>
   </>
  )
}

export default NavNar
