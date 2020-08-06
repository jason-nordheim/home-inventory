import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: '3rem', 
      paddingBottom: '4rem', 
      '& div': {
        display: 'flex', 
        placeContent: 'center'
      }, 
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  export default useStyles
