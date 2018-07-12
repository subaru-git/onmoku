import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";

const theme = createMuiTheme();
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById("root")
);
