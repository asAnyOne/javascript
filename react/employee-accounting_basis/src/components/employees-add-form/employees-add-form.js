import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const name = "",
      salary = "";
    e.preventDefault();
    if (this.state.salary && this.state.name) {
      this.props.getData(this.state);
      this.setState({ name, salary });
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add the new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="what is his(her) name?"
            className="form-control new-post-label"
            name="name"
            onChange={this.onChangeValue}
            value={name}
          />
          <input
            type="text"
            placeholder="how much salary $?"
            className="form-control new-post-label"
            name="salary"
            onChange={this.onChangeValue}
            value={salary}
          />
          <button className="btn btn-outline-light" type="submit">
            ADD
          </button>
        </form>
      </div>
    );
  }
}
export default EmployeesAddForm;
