import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow:'1',
    padding: theme.spacing(2),
    backgroundColor:'#f5edd2',
  },
  root:{
    flexGrow:'1',
    maxWidth:'100%',
    borderRadius:'100%',
  
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
    margin:'-6rem 8rem',
    textTransform:'uppercase',
  
    
  },
  button: {
    color: '#fff',
    backgroundColor: '#DCCA87',
    margin: '0rem 4rem'
  }
  
  
}));
