import { useContext } from "react";
import DataContext from "../context/context";

const WithPremium = () => {
  const context = useContext(DataContext);
  const premium = context.filter((item) => item.increase).length;
  return <h2>Employees awarded him premium: {premium}</h2>;
};

export default WithPremium;
