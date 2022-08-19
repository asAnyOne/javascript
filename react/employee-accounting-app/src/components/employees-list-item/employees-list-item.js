import { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  toggleIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  toggleLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary } = this.props;
    let className = "list-group-item  d-flex justify-content-between";

    if (this.state.increase) {
      className = className + " increase";
    }
    if (this.state.like) {
      className = className + " like";
    }

    return (
      <li className={className}>
        <span onClick={this.toggleLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          defaultValue={`${salary} $`}
          className="list-group-item-input"
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            type="button"
            onClick={this.toggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
