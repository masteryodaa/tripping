import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Tripping - Your Travel Guide
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
