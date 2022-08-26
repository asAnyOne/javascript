import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    const { data, onDelete, onToggleIncrease, onToggleLike } = this.props;
    const listItems = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <EmployeesListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleIncrease={() => onToggleIncrease(id, "increase")}
          onToggleLike={() => onToggleLike(id, "like")}
        />
      );
    });

    return <ul className="app-list list-group">{listItems}</ul>;
  }
}
export default EmployeesList;
