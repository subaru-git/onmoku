import Button from "@material-ui/core/Button";
import React from "react";

export default props => {
  return (
    <Button variant="raised" onClick={props.handleClick}>
      Send{" "}
    </Button>
  );
};
