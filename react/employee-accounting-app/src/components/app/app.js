import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  const data = [
    { name: "John Smith", salary: 5000, increase: false, id: 1 },
    { name: "Alex M", salary: 3000, increase: true, id: 2 },
    { name: "Carl W", salary: 800, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />

      <EmployeesAddForm />
    </div>
  );
}
export default App;