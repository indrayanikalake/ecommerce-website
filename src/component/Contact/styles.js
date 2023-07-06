import { makeStyles} from '@material-ui/core/styles';
import { accesories } from '../../assets';

export default makeStyles((theme) =>({
   
    main: {
       backgroundImage:`url(${accesories})`,
       backgroundSize:'cover',
        height:'70vh',
        marginLeft:theme.spacing(5),
        marginTop:theme.spacing(1),
        display:'flex',
        alignItems:'space-between',
    },
    contact: {
      marginTop:theme.spacing(10),
      
    },
    form: {
        textAlign:'center',
        background: 'white',
        backdropFilter:'blur(40px)',
        maxWidth: 400,
     
        margin:'0 auto',
      },
      textField: {
        
        marginBottom: theme.spacing(2),
      },
      button: {
        marginTop: theme.spacing(2),
      },
}))