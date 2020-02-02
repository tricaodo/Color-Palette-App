import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: { 
    backgroundColor: "blue", 
    width: "100%",
    display: "flex",
    justifyContent: "center",    
    alignItems: "flex-start"
  },
  container: { 
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",    
    flexDirection: "column",
    flexWrap: "wrap",
    border: "1px solid white"
  },
  title: { 
    fontSize: "1.5rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "15px",
    paddingTop: "15px",
    width: "100%"
  },
  palettes: {  
    display: "grid",    
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
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
