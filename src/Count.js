import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
    view: false
  };

  increment = () => {
    console.log("count");
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    console.log("count");
    this.setState({
      count: this.state.count - 1
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
    if (this.state.count === 3 && this.state.view) {
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
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>

        <p>{this.state.count}</p>
        <div>{this.containerView()}</div>
      </div>
    );
  }
}
