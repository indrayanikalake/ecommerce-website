import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow:'1',
    padding: theme.spacing(2),
  },
  root:{
    flexGrow:'1',
    maxWidth:'100%',
    borderRadius:'10px',
  
    margin:'1rem 1rem'
},
media: {
    height: '60vh',
  
  },
  overlay: {
    position: 'absolute',
   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginTop:'-15rem',
    textAlign: 'center'
  },
  headtext: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    marginLeft:'2rem',
    textTransform:'uppercase',
  
    
  },
  button: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    marginTop: '8rem'
  }
  
  
}));
