import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    flexGrow: 1,
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
  },
  logo: {
    color: '#FFF',
    fontSize: 32,
  },
}));
