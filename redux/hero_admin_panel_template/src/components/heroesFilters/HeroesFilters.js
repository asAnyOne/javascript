// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { filtersFetched, fetchingFilters } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const { activeClass, filtersLoadingStatus, filtered } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(fetchingFilters(request)); // TEST on reduxthunk in react store ,to dispatch function given as an argument
    // dispatch(filtersFetching());
    // request("http://localhost:3001/filters")
    //   .then((data) => dispatch(filtersFetched(data)))
    //   .catch(dispatch(filtersFetchingError()));
    // eslint-disable-next-line
  }, []);
  const createBtnsGroup = (list) => {
    return list.map(({ name, label, className }, i) => {
      return (
        <button
          className={`${className} ${activeClass === name && "active"}`}
          onClick={() =>
            name !== activeClass && dispatch(filtersFetched(filtered, name))
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
