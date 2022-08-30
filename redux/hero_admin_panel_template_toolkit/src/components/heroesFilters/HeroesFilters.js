import { filtersActive, fetchFilters } from "./filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const dispatch = useDispatch();
  const { activeClass, filtersLoadingStatus, filtered } = useSelector(
    (state) => state.filters
  );
  useEffect(() => {
    dispatch(fetchFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          {(filtersLoadingStatus === "loading" && <Spinner />) ||
            createBtnsGroup(filtered)}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
