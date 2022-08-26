import { Component, lazy, Suspense } from "react";

import Form from "./components/form/Form";
import Name from "./components/name/Name";
import Age from "./components/age/Age";

import "./App.css";

const MyLazyComp = lazy(() => import("./components/my-lazy-comp/MyLazyComp"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      dynamic: null,
    };
  }

  dyn = () =>
    import("./components/dynamic-components/Dynamic").then((data) =>
      this.state.dynamic
        ? this.setState({ dynamic: null })
        : this.setState({ dynamic: data.Dynamic() })
    );

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
        <Form
          render={(name, age) => (
            <>
              <Name name={name} />
              <Age age={age} />
            </>
          )}
        />
        <Suspense fallback={<div>It is loading, MyLazyComp</div>}>
          <MyLazyComp />
        </Suspense>

        {this.state.dynamic}

        <button onClick={this.dyn}>toggle the dynamic componet</button>
      </div>
    );
  }
}

export default App;
