import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "all",
    };
  }

  activeTab = (e) => {
    this.setState({
      active: e.target.getAttribute("data-filter"),
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="btn-group">
        <button
          className={
            active === "all" ? "btn btn-light" : "btn btn-outline-light"
          }
          type="button"
          data-filter="all"
          onClick={(e) => {
            this.activeTab(e);
            this.props.onFilter(e);
          }}
        >
          All employees
        </button>
        <button
          className={
            active === "increase" ? "btn btn-light" : "btn btn-outline-light"
          }
          type="button"
          data-filter="increase"
          onClick={(e) => {
            this.activeTab(e);
            this.props.onFilter(e);
          }}
        >
          Employees for rise
        </button>
        <button
          className={
            active === "salary" ? "btn btn-light" : "btn btn-outline-light"
          }
          type="button"
          data-filter="salary"
          onClick={(e) => {
            this.activeTab(e);
            this.props.onFilter(e);
          }}
        >
          Salary over then 1000$
        </button>
      </div>
    );
  }
}
export default AppFilter;
