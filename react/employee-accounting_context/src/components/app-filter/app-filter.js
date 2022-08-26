import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "all",
    };
  }

  addActiveClass = (dataFilter) => {
    const light = "btn btn-light",
      outline = "btn btn-outline-light";
    return this.state.active === dataFilter ? light : outline;
  };
  onFilter = (e) => {
    const active = e.target.getAttribute("data-filter");
    this.setState({ active });
    this.props.onFilter(e);
  };
  render() {
    const btnsData = [
      { clazz: "all", content: "All employees" },
      { clazz: "increase", content: "Employees for rise" },
      { clazz: "salary", content: "Salary over then 1000$" },
    ];
    const button = () => {
      return btnsData.map(({ clazz, content }, i) => {
        return (
          <button
            key={i}
            className={this.addActiveClass(clazz)}
            type="button"
            data-filter={clazz}
            onClick={this.onFilter}
          >
            {content}
          </button>
        );
      });
    };
    return <div className="btn-group">{button()}</div>;
  }
}
export default AppFilter;
