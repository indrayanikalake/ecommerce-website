import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root:{
        maxWidth:'100%',
        borderRadius:'10px',
        borderBottom:'2px solid black',
        margin:'0.5rem 0.5rem'
    },
    media: {
        height: '30vh',
        paddingTop: '60.25%', 
      },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end',
        
    },
}))