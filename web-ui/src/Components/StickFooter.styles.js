import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: -1,
  },
  footer: {
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));
