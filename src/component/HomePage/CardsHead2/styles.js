import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop:theme.spacing(4),
    flexGrow:'1',
    padding: theme.spacing(8,5),
    
  },
  root:{
    flexGrow:'1',
    maxWidth:'100%',
   
    margin:'1rem 0.5rem',
},
media: {
    height: '40vh',
  
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
    margin:'-6rem 8rem',
    textTransform:'uppercase',
  
    
  },
  button: {
    color: '#fff',
    backgroundColor: '#DCCA87',
    margin: '0rem 4rem'
  }
  
  
}));
