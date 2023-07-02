import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    slides: {
        width:'100%',
        height:'100vh',
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(2),
        
    },
    tours: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(4),
     
    
    },
    tour: {
        marginRight: theme.spacing(4),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      backgroundColor: '#F5EFDB',
      borderRadius: theme.spacing(1),
      borderBottom: '2px solid black',
      maxWidth: 400,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    tourDate: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
    tourPlace: {
      marginBottom: theme.spacing(1),
    },
    tourLocation: {
      color: '#999',
      marginBottom: theme.spacing(2),
    },
    tourButton: {
      marginTop: theme.spacing(1),
    },
    slides_overlay: {
        width: '100%',
        position: 'absolute',
        inset: '0',
        background: 'rgba(14, 14, 14, 0.4)',
        textAlign: 'center',
        display :'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
     
}));