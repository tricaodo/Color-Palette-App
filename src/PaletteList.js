import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {backgroundColor: "white"},
  container: {backgroundColor: "white"},
  title: {backgroundColor: "white"},
  palettes: {backgroundColor: "white"}
};
class PaletteList extends Component {

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.title}>React Color</nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette {...palette} />
          ))}
        </div>
      </div>
    </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
