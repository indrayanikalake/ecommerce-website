import { makeStyles } from '@material-ui/core/styles';
import { about } from '../../assets';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  aboutTitle: {
    width: '100%',
    height: '25vh',
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    borderTop: '15px solid pink',
    borderLeft: '15px solid pink',
    marginTop: '-4.2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  aboutContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '3rem',
  },
  root: {
    borderRadius:'25px',
    marginBottom:theme.spacing(4),
    width: '400px', // Set the desired width of the card
    marginLeft:'2.5rem'
  },
  media: {
    height: '37vh', // Set the desired height of the card media
   
    
  
  },
  rooot: {
    borderRadius:'45%',
    marginBottom:theme.spacing(4),
    height:'40vh',
    width: '400px', // Set the desired width of the card
    marginLeft:'102.5rem'
  },
  story:{
    marginTop:'-25rem ',
    marginLeft: '48rem'
  },
  mission:{
    marginTop:'4rem ',
    marginLeft: '5rem',
    marginBottom:'2rem'
  },
 
}));
