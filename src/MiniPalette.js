import React from "react";
import { withStyles } from "@material-ui/styles";
const style = {
  root: {
      display: "flex",      
      borderRadius: "5px",
      border: "1px solid grey",
      padding: "0.5rem",
      "&:hover": {
          cursor: "pointer"
      }
  },
  colors: {},
  title: {},
  emoji: {}
};
function miniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(style)(miniPalette);
