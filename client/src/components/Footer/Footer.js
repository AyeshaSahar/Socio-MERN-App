import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import useStyles from './styles';
import TwitterIcon from '@material-ui/icons/Twitter';


const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <TwitterIcon className={classes.icons} onClick={() => window.open('https://twitter.com/IAyeshaSahar')} />
        <br />
        <br/>
      <Typography className={classes.text} variant="h5">Made with Love by Ayesha Sahar ❤️ </Typography>
    </AppBar>
  );
};

export default Footer;
