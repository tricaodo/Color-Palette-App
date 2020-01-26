import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox name={color.name} background={color.hex} key={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
