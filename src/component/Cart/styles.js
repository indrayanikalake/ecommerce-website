import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow:'1',
    margin: '0 5rem',
    background:'white',
    padding: theme.spacing(0,5),
    width:'80%'
  },
  title: {
  
    margin:'2rem 35rem',
    letterSpacing:'0.2',
    background:'white',
    textAlign:'center',
    width:'50%'
  },
  cartItems: {
    display:'flex',
    justifyContent:'space-between'
  },
 
  description: {

    margin: ' 4rem 12rem'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
 
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '-10%',
    width: '100%',
    justifyContent: 'space-between',
  },
 
}));
