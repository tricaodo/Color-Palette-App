import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";
class ColorBox extends Component {
  constructor() {
    super();
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const { name, background, paletteId, colorId, showLink } = this.props;
    const { copied } = this.state;
    const isBlackText = chroma(background).luminance() >= 0.5;
    const isLightText = chroma(background).luminance() <= 0.08;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p className={`${isBlackText && "black-text"}`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={`${isLightText && "light-text"}`}>
                {name}
              </span>
            </div>
            <button className={`copy-button ${isBlackText && "black-text"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${isBlackText && "black-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
