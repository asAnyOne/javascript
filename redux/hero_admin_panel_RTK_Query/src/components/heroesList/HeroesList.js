import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { useDeleteHeroMutation, useGetHeroesQuery } from "../api/apiSlice";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const {
    data: heroes = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetHeroesQuery();
  const [deleteHero] = useDeleteHeroMutation();

  const activeClass = useSelector((state) => state.filters.activeClass);

  const filteredHeroes = useMemo(() => {
    const filteredHeroes = heroes.slice();
    return activeClass === "all"
      ? filteredHeroes
      : filteredHeroes.filter((hero) => hero.element === activeClass);
  }, [heroes, activeClass]);

  const onDelete = useCallback(
    (id) => {
      deleteHero(id).unwrap();
    },
    [deleteHero]
  );

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
    (isLoading && <Spinner />) ||
    (isError && <h5 className="text-center mt-5">Ошибка загрузки</h5>) ||
    (isSuccess && <ul>{elements}</ul>)
  );
};

export default HeroesList;
