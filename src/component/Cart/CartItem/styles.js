import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
main: {
    display: 'flex',
    alignItems: 'space-between',
    flexDirection: 'row',
    
},
 media: {
    height: '20vh',
    paddingTop: '60.25%', 
 },
  cart: {
    margin:'0.5rem 0.5rem',
    borderBottom:'2px solid black'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  description: {
    display: 'flex',
   alignItems: 'space-between',
    flexDirection: 'column',
    margin: '5rem 0.5rem',
  }
}));