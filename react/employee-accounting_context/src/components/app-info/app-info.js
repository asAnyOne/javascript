import { Component } from "react";

import AllEmployees from "../app-info-all-employees/all-employees";
import WithPremium from "../app-info-employees-with-premium/with-premium";

import "./app-info.css";

class AppInfo extends Component {
  render() {
    return (
      <div className="app-info">
        <h1>Accounting employees in company N</h1>
        <AllEmployees />
        <WithPremium />
      </div>
    );
  }
}
export default AppInfo;
