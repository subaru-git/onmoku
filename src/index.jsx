import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

const App = () => {
  return (
    <Button variant="contained" color="primary">
      online mokumoku
    </Button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
