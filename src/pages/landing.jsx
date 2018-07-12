import React from "react";
import Menu from "../molecules/menu";
import Concept from "../organisms/concept";
import TopImage from "../organisms/topimage";

export default () => {
  return (
    <React.Fragment>
      <Menu />
      <TopImage />
      <Concept />
    </React.Fragment>
  );
};
