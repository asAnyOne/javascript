import "./app-info.css";

const AppInfo = (props) => {
  const { data } = props;
  const premium = data.filter((item) => item.increase).length;

  return (
    <div className="app-info">
      <h1>Accounting employees in company N</h1>
      <h2>Total number of employees: {data.length}</h2>
      <h2>Employees awarded him premium: {premium}</h2>
    </div>
  );
};
export default AppInfo;
