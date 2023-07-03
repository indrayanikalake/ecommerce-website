import { makeStyles} from '@material-ui/core/styles';
import { contact } from '../../assets';

export default makeStyles((theme) =>({
    main: {
        backgroundImage:`url(${contact})`,
        backgroundSize: 'cover',
        height:'100vh',
        marginTop:theme.spacing(7),
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