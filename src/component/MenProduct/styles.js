import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow:'1',
    background:'rgb(240, 233, 240)',
    padding: theme.spacing(0,15),
  },
  title: {
    position:'center',
    margin:'0 25rem',
    letterSpacing:'0.2',
    background:'white',
    textAlign:'center',
    width:'100%'
  },
 
}));
