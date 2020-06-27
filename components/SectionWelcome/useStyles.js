import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  title: {
    color: '#FFF',
  },
}));
