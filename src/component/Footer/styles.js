import { makeStyles } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  main: {
    backgroundColor: 'black',
    width: '100%',
    height: '85vh',
    marginTop: theme.spacing(15),
    background:'black',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  mainContent: {
    display: 'flex',
    alignItems: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    margin:theme.spacing(0,-72),
    padding:theme.spacing(-18),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  subContent: {
    display: 'flex',
    alignItems: 'space-between',
    textAlign:'center',
    flexDirection: 'column',
   
    height:'50vh',
   margin:'8rem 1rem',
    padding: theme.spacing(3,20),
    background:'black',
    color: '#AAAAAA',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'space-between',
    textAlign: 'center',
    padding: theme.spacing(5, 22),
    marginLeft: theme.spacing(68),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
      padding: theme.spacing(1),
    },
  },
}));
