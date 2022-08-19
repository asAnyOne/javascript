import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }
  incCounter = () => {
    if (this.state.counter < 50)
      this.setState(({ counter }) => ({
        counter: counter + 1,
      }));
  };

  decCounter = () => {
    if (this.state.counter > -50)
      this.setState(({ counter }) => ({
        counter: counter - 1,
      }));
  };

  rndCounter = () => {
    this.setState(({ counter }) => ({
      counter: (Math.random() * 100 - 50).toFixed(0),
    }));
  };

  resetCounter = () => {
    this.setState({
      counter: this.props.counter,
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
