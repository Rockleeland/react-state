import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
    view: false
  };

  increment = () => {
    this.setState({
      count: this.state.count + 32
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 32
    });
  };

  toggle = () => {
    this.setState({
      view: !this.state.view
    });
  };

  containerView = () => {
    let style = {
      backgroundColor: "blue"
    };
    if (this.state.count <= 32 && this.state.view) {
      style = {
        backgroundColor: "#aad4e5"
      };
      return (
        <div>
          <button onClick={this.toggle}>Hide div!</button>
          <div style={style}>Ice</div>
        </div>
      );
    }
    if (this.state.view) {
      return (
        <div>
          <button onClick={this.toggle}>Hide div!</button>
          <div style={style}>Water</div>
        </div>
      );
    }
    return <button onClick={this.toggle}>Show div!</button>;
  };

  render() {
    const style = {
      fontSize: 16
    };
    return (
      <div style={style}>
        <button onClick={this.increment}>+32</button>
        <button onClick={this.decrement}>-32</button>

        <p>{this.state.count}</p>
        <div>{this.containerView()}</div>
      </div>
    );
  }
}
