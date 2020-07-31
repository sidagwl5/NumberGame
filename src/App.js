import React, { Component, Fragment } from "react";
import UI from "./components/UI";
import Table from "./components/Table";
import Animation from "./components/Animation";

export default class App extends Component {
  state = {
    times: [1],
  };

  componentDidMount() {
    Animation();
  }

  changeComponent = () => {
    this.setState({
      times: [
        ...this.state.times,
        this.state.times[this.state.times.length - 1] + 1,
      ],
    });
  };

  handleUIComponents = () => {
    return this.state.times.map((v) => {
      return (
        <div key={v}>
          <UI times={v} changeComponent={this.changeComponent} />
        </div>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div className="UI-main">
          <div className="UI-submain">
            <h1>Number game</h1>
            {this.handleUIComponents()}
          </div>

          <Table />
        </div>
      </Fragment>
    );
  }
}
