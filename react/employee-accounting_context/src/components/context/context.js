import { createContext } from "react";

const DataContext = createContext({
  data: [
    { name: "John S", salary: 5000, increase: false, like: true, id: 1 },
    { name: "Alex M", salary: 3000, increase: true, like: false, id: 2 },
    { name: "Carl W", salary: 800, increase: false, like: false, id: 3 },
  ],
});
export default DataContext;
