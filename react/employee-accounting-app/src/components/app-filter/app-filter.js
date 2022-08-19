import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Employees for rise
      </button>
      <button className="btn btn-outline-light" type="button">
        Salary over then 1000$
      </button>
    </div>
  );
};
export default AppFilter;
