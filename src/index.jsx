import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { firebaseDb } from "./firebase";

const messagesRef = firebaseDb.ref("messages");

const OnClick = () => {
  messagesRef.push({
    user_name: "test",
    text: "test message"
  });
};
const App = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        OnClick();
      }}
    >
      online mokumoku
    </Button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
