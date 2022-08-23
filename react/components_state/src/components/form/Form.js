import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    age: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div style={{ marginTop: 50 }}>
        <form>
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            placeholder="Your name"
            autoComplete="off"
          />
          <input
            onChange={this.onChange}
            type="text"
            name="age"
            value={age}
            placeholder="Your age"
            autoComplete="off"
          />
        </form>

        <h1>
          {!age
            ? ""
            : age < 18
            ? "Hey "
            : age >= 18 && age < 30
            ? "Hi"
            : age >= 30 && age < 100
            ? "Hello"
            : "You are write wrong age!"}
        </h1>
        {this.props.render(name, age)}
      </div>
    );
  }
}
export default Form;
