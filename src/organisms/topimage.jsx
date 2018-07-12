import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import React from "react";

const styles = theme =>
  createStyles({
    button: {
      display: "inline",
      height: "49px",
      left: "50%",
      paddingBottom: "0.75em",
      paddingLeft: "7em",
      paddingRight: "7em",
      paddingTop: "0.75em",
      position: "absolute",
      top: "60%",
      transform: "translate(-50%,-50%)",
      width: "auto"
    },
    paper: {
      backgroundImage: "url(" + require("../images/top.jpg") + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "500px",
      position: "relative",
      width: "100%"
    }
  });

export default withStyles(styles)(props => {
  return (
    <Paper className={props.classes.paper}>
      <Button className={props.classes.button} variant="raised">
        Get Started
      </Button>
    </Paper>
  );
});
