import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { format: "hex", open: false };
    this.changeFormat = this.changeFormat.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  changeFormat(e) {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.changeFormat(e.target.value);
    });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider
                min={100}
                max={900}
                defaultValue={level}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container">
          <Select onChange={this.changeFormat} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)"</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={1000}
          onClose={this.handleClose}
          message={`Format changed to ${format.toUpperCase()}`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </header>
    );
  }
}

export default Navbar;
