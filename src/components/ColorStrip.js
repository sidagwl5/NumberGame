import React, { Component } from "react";

export default class ColorStrip extends Component {
  render() {
    return (
      <div
        className="ColorStrip"
        style={{ backgroundColor: `${this.props.color}` }}
      >
        <p>{this.props.type}</p>
      </div>
    );
  }
}
