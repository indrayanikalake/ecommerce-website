import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) =>({
   
    main: {
    
        height:'100vh',
        marginTop:theme.spacing(1),
        padding:theme.spacing(10),
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