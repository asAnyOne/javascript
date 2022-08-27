import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import DataContext from "../context/context";

import "./app.css";

const { Provider } = DataContext;
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
    const id = ((this.state.data.length + 1) * Math.random()).toFixed(15);
    this.setState(({ data }) => {
      dat.increase = false;
      dat.like = false;
      dat.id = id;
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
    const data = this.state.data;
    function getBoolean(item) {
      return !!item.name.toLowerCase().match(search.toLowerCase());
    }
    if (search === "" && filter === "all") {
      return data;
    }
    switch (filter) {
      case "salary":
        return data.filter((item) => item[filter] > 1000 && getBoolean(item));
      case "increase":
        return data.filter((item) => item[filter] && getBoolean(item));
      default:
        return data.filter((item) => getBoolean(item));
    }

    // else if (filter === "salary") {
    //   return  data.filter(
    //     (item) => item[filter] > 1000 && getBoolean(item)
    //   );
    // } else if (filter === "increase") {
    //   return  data.filter((item) => item[filter] && getBoolean(item));
    // } else {
    //  return  data.filter((item) => getBoolean(item));
    // }
  };
  onSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
  };

  onFilter = (e) => {
    const filter = e.target.getAttribute("data-filter");
    this.setState({ filter });
  };
  render() {
    const { filter, search, data } = this.state;
    const visibleData = this.updateList(search, filter);
    console.dir({ Provider });

    return (
      <div className="app">
        <Provider value={data}>
          <AppInfo />
        </Provider>

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
