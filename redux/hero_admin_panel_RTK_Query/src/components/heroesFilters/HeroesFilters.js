import { filtersActive } from "./filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetFiltersQuery } from "../api/apiSlice";

import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const { data: filters = [], isLoading } = useGetFiltersQuery();
  const dispatch = useDispatch();
  const activeClass = useSelector((state) => state.filters.activeClass);

  const createBtnsGroup = (list) => {
    return list.map(({ name, label, className }, i) => {
      return (
        <button
          className={`${className} ${activeClass === name && "active"}`}
          onClick={() => name !== activeClass && dispatch(filtersActive(name))}
          key={i}
        >
          {label}
        </button>
      );
    });
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {(isLoading && <Spinner />) || createBtnsGroup(filters)}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
