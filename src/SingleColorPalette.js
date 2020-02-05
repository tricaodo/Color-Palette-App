import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, filterColorBy) {
    let shades = [];
    const colors = palette.colors;
    for (let lv in colors) {
      shades = shades.concat(
        colors[lv].filter(color => color.id === filterColorBy)
      );
    }
    return shades.splice(1);
  }
  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={`${color.id}-${color.name}`}
        name={color.name}
        background={color.hex}
        colorId={color.id}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
