import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S", salary: 5000, increase: false, like: true, id: 1 },
        { name: "Alex M", salary: 3000, increase: true, like: false, id: 2 },
        { name: "Carl W", salary: 800, increase: false, like: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };
  addItem = (dat) => {
    this.setState(({ data }) => {
      dat.increase = false;
      dat.like = false;
      dat.id = this.state.data.length + 1;
      return { data: [...data, dat] };
    });
  };

  onToggle = (id, status) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          // const newItem = JSON.parse(JSON.stringify(item));
          // newItem.increase = !item.increase;
          // return newItem;

          return { ...item, [status]: !item[status] };
        } else {
          return item;
        }
      }),
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo data={this.state.data} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggle}
          onToggleLike={this.onToggle}
        />

        <EmployeesAddForm getData={this.addItem} />
      </div>
    );
  }
}
export default App;
