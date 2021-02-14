import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:10
  },
  title: {
    flexGrow: 1,
  },
  appbar:{
    background: '#2E3B55',
    height: 80,
    textAlign:'center'
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Search Electric Vehicle Charging Location
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
