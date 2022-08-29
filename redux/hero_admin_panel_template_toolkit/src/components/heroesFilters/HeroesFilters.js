import { filtersFetched, filtersActive } from "./filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";
import { fetchingFilters } from "../../actions";

const HeroesFilters = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const { activeClass, filtersLoadingStatus, filtered } = useSelector(
    (state) => state.filters
  );
  useEffect(() => {
    dispatch(fetchingFilters(request));
  }, []);
  const createBtnsGroup = (list) => {
    return list.map(({ name, label, className }, i) => {
      return (
        <button
          className={`${className} ${activeClass === name && "active"}`}
          onClick={() =>
            name !== activeClass &&
            dispatch(filtersFetched(filtered) && dispatch(filtersActive(name)))
          }
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
