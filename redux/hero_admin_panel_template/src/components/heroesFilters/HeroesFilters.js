// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { elementWater, elementWind, elementAll, elementEarth, elementFire } from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const HeroesFilters = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState({ all: true });
  const { all, fire, water, wind, earth } = active;

  const onFilter = (index, action) => {
    dispatch(action());
    setActive({ [index]: true });
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button className={`btn btn-outline-dark ${all && "active"}`} onClick={() => onFilter("all", elementAll)}>
            Все
          </button>
          <button
            className={`btn btn-outline-danger ${fire && "active"}`}
            onClick={() => onFilter("fire", elementFire)}
          >
            Огонь
          </button>
          <button
            className={`btn btn-outline-primary  ${water && "active"}`}
            onClick={() => onFilter("water", elementWater)}
          >
            Вода
          </button>
          <button
            className={`btn btn-outline-success  ${wind && "active"}`}
            onClick={() => onFilter("wind", elementWind)}
          >
            Ветер
          </button>
          <button
            className={`btn btn-outline-secondary  ${earth && "active"}`}
            onClick={() => onFilter("earth", elementEarth)}
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
