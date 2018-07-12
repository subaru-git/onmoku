import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";

const styles = theme =>
  createStyles({
    arrow: {
      display: "inline-block",
      height: "16px",
      paddingLeft: "16px",
      verticalAlign: "middle",
      width: "16px"
    },
    concept: {
      backgroundColor: "silver",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%"
    },
    flex: {
      color: "#fff",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      height: "auto",
      justifyContent: "space-around"
    },
    flexItem: {
      display: "flex",
      flexBasis: "0",
      flexGrow: 1,
      width: "auto"
    },
    h2: {
      color: "#fff",
      fontSize: "2rem",
      marginTop: 0,
      textAlign: "center"
    },
    icon: {
      color: "#00a2c7",
      height: "72px",
      width: "72px"
    },
    link: {
      color: "#00a2c7",
      display: "inline"
    },
    section: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "1100px",
      width: "100%"
    }
  });

export default withStyles(styles)(props => {
  return (
    <div className={props.classes.concept}>
      <section className={props.classes.section}>
        <h2 className={props.classes.h2}>XXX</h2>
        <div className={props.classes.flex}>
          <div className={props.classes.flexItem}>
            <div>
              <span>
                <SearchIcon className={props.classes.icon} />
              </span>
            </div>
            <div>
              <h3>
                <span>XXX</span>
              </h3>
              <p>
                <span>それっぽいこと</span>
              </p>
              <div className={props.classes.link}>
                <span>XXX</span>
                <ArrowForwardIcon className={props.classes.arrow} />
              </div>
            </div>
          </div>
          <div className={props.classes.flexItem}>
            <div>
              <span>
                <AddIcon className={props.classes.icon} />
              </span>
            </div>
            <div>
              <h3>
                <span>XXX</span>
              </h3>
              <p>
                <span>それっぽいこと</span>
              </p>
              <div className={props.classes.link}>
                <span>XXX</span>
                <ArrowForwardIcon className={props.classes.arrow} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
