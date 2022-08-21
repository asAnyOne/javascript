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
      search: "",
      filter: "all",
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

  updateList = (search, filter) => {
    function getBoolean(item) {
      return !!item.name.toLowerCase().match(search.toLowerCase());
    }
    if (search === "" && filter === "all") {
      return this.state.data;
    }
    switch (filter) {
      case "salary":
        return this.state.data.filter(
          (item) => item[filter] > 1000 && getBoolean(item)
        );

      case "increase":
        return this.state.data.filter(
          (item) => item[filter] && getBoolean(item)
        );
      default:
        return this.state.data.filter((item) => getBoolean(item));
    }

    // else if (filter === "all") {
    //   return this.state.data.filter((item) => getBoolean(item));
    // } else if (filter === "increase") {
    //   return this.state.data.filter((item) => item[filter] && getBoolean(item));
    // } else {
    //   return this.state.data.filter(
    //     (item) => item[filter] > 1000 && getBoolean(item)
    //   );
    // }
  };
  onSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onFilter = (e) => {
    this.setState({
      filter: e.target.getAttribute("data-filter"),
    });
  };
  render() {
    const { filter, search, data } = this.state;
    const visibleData = this.updateList(search, filter);

    return (
      <div className="app">
        <AppInfo data={data} />

        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter onFilter={this.onFilter} />
        </div>

        <EmployeesList
          data={visibleData}
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
