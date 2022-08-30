import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { fetchHeroes, heroDeleted, selectAll } from "./heroesSlice";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const filteredHeroesSelector = createSelector(
  (state) => state.filters.activeClass,
  selectAll,
  (activeClass, heroes) => {
    return activeClass === "all"
      ? heroes
      : heroes.filter((hero) => hero.element === activeClass);
  }
);

const HeroesList = () => {
  const heroesLoadingStatus = useSelector(
    (state) => state.heroes.heroesLoadingStatus
  );
  const filteredHeroes = useSelector(filteredHeroesSelector);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchHeroes());
    // eslint-disable-next-line
  }, []);

  const onDelete = (id) => {
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
      .then(dispatch(heroDeleted(id)))
      .catch((err) => console.log(err));
  };

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
      );
    });
  };

  const elements = renderHeroesList(filteredHeroes);

  return (
    (heroesLoadingStatus === "loading" && <Spinner />) ||
    (heroesLoadingStatus === "error" && (
      <h5 className="text-center mt-5">Ошибка загрузки</h5>
    )) || <ul>{elements}</ul>
  );
};

export default HeroesList;
