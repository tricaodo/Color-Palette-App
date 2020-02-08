import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
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
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={`${color.id}-${color.name}`}
        name={color.name}
        background={color[format]}
        colorId={color.id}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorBox Palette">
        <Navbar changeFormat={this.changeFormat} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox go-back">
          <Link to={`/palette/${id}`} className="copy-button back-button">Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
