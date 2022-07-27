import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const a = deepPurple[50];

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: '5px',
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: '50px 50px',
    backgroundColor: deepPurple[900],
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
 text: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: a,
  },
  icons: {
    color: a,
    margin: '0 10px',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px',
      justifyContent: 'center',
  },
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[100]),
    backgroundColor: deepPurple[100],
  },
}));
