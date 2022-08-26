import { Component } from "react";
import DataContext from "../context/context";

class AllEmployees extends Component {
  static contextType = DataContext;
  render() {
    return <h2>Total number of employees: {this.context.length}</h2>;
  }
}
export default AllEmployees;
