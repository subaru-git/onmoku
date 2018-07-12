import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default () => {
  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          OnMoku
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
