import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const Heading = (user) => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Typography variant="h6" color="inherit" noWrap>
        Book Club
      </Typography>
    </AppBar>
  </React.Fragment>
)

export default Heading;