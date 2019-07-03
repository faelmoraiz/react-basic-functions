import React from "react";

import "./Counter.css";

class Counter extends React.Component {
  state = {
    hora: 0
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    this.setState({ hora: this.state.hora + 1 });
  };

  render() {
    return (
      <div className="Counter">
        <header className="Counter-header">
          <h1>Counter:</h1>
          <p>{this.state.hora}</p>
        </header>
      </div>
    );
  }
}

export default Counter;
