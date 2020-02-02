import React from "react";
import { withStyles } from "@material-ui/styles";
const style = {
  root: {
    backgroundColor: "white",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid grey",
    // overflow: "hidden",
    // position: "relative",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey",
    width: "100%",
    height: "150px"    
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    paddintTop: "0.5rem",
    fontSize: "1rem"
    // position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },

  miniPalette: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px"
  }
};
function miniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const palette = colors.map(color => (
    <div
      className={classes.miniPalette}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{palette}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(style)(miniPalette);
