import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import AuthContext from '../Context/AuthContext';


const NavBarHead = () => {
    const classes=useStyles();
     const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
   <>
   <AppBar position='fixed' className={classes.appBar}>
     <Toolbar>
        <div className={classes.heading}>
        <h4 style={{marginLeft:'8rem'}}   className='headtext__cormorant' color='inherit'>
          Izara Avara
        </h4>
      
        </div>
        <div className={classes.grow}/>
       
        <div className={classes.button} >
            {!isLoggedIn &&(
            <IconButton  aria-label='Show Cart Items' color='inherit'>
                <Typography  component={NavLink} to='/signIn' variant='h4' className={classes.title} color='inherit'>
                    Sign In
                </Typography>
                
            </IconButton>
           )}
           {isLoggedIn &&(
            <IconButton aria-label='Show Cart Items' color='inherit'>
            <Typography  component={NavLink} to='/' onClick={logoutHandler} variant='h4' className={classes.title} color='inherit'>
                Sing Out
            </Typography>
            
            </IconButton>
        
        )}
        </div>
        
     </Toolbar>
   </AppBar>
   </>
  )
}

export default NavBarHead
