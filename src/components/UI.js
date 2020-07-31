import React, { Component, Fragment } from "react";
import ColorStrip from "./ColorStrip";
import Condition from "./Condition";
import gsap, { Power2 } from "gsap";

export default class UI extends Component {
  state = {
    color: "",
    numVal: "",
    error: "",
    type: "",
    attempts: 0,
    reset: 0,
    randomVal: 0,
  };

  componentDidMount() {
    this.setState({
      randomVal: Math.floor(Math.random() * (100 * this.props.times)),
    });

    this.tl = gsap.timeline();
  }

  handleChange = (e) => {
    this.setState(
      {
        numVal: e.target.value,
      },
      () => {
        this.setState({
          error: "",
        });
      }
    );
  };

  handleClick = () => {
    const numVal = this.state.numVal;

    if (!numVal) {
      this.setState({
        error: "Please enter a number",
      });
      return;
    }

    const { color, type } = Condition(numVal, this.state.randomVal);

    this.setState(
      {
        color: color,
        type: type,
        attempts: this.state.attempts + 1,
      },
      () => {
        this.tl.fromTo(
          ".ColorStrip",
          0.2,
          { x: "-100%", opacity: 0, ease: Power2.easeInOut() },
          { x: "0%", opacity: 1, ease: Power2.easeInOut() }
        );
        if (this.state.color === "green") {
          this.props.changeComponent(0);

          this.setState({
            reset: 1,
          });
        }
      }
    );
  };

  render() {
    return (
      <Fragment>
        <div className="card">
          <p>{`Range: (1, ${100 * this.props.times})`}</p>
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="Enter number here..."
            value={this.state.numVal}
          />
          {this.state.error ? <p>{this.state.error}</p> : null}

          {this.state.reset ? (
            <p style={{ fontSize: "22px", fontWeight: "500px" }}>
              Congratulations!!, You Passed Round {this.props.times}!!
            </p>
          ) : (
            <button type="submit" onClick={this.handleClick}>
              Predict
            </button>
          )}

          {this.state.attempts ? (
            <p>Number of Attempts: {this.state.attempts}</p>
          ) : null}
          {this.state.color ? (
            <ColorStrip color={this.state.color} type={this.state.type} />
          ) : null}
        </div>
      </Fragment>
    );
  }
}
