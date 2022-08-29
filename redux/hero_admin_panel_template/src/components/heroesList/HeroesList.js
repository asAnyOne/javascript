import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroDeleted,
} from "../../actions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const { heroes, heroesLoadingStatus } = useSelector((state) => state.heroes);
  const { activeClass } = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    // dispatch("HEROES_FETCHING"); // TEST on enhancer in react store ,to dispatch "HEROES_FETCHING" given as an argument , instead heroesFetching()
    dispatch(heroesFetching); // TEST on reduxthunk in react store ,to dispatch function given as an argument , instead heroesFetching()
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));

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

  const filteredHeroes = () => {
    return activeClass === "all"
      ? heroes
      : heroes.filter((hero) => hero.element === activeClass);
  };

  const elements = renderHeroesList(filteredHeroes());

  return (
    (heroesLoadingStatus === "loading" && <Spinner />) ||
    (heroesLoadingStatus === "error" && (
      <h5 className="text-center mt-5">Ошибка загрузки</h5>
    )) || <ul>{elements}</ul>
  );
};

export default HeroesList;
