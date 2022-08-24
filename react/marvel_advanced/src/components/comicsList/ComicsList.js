import { useState, useEffect } from "react";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [init, setInit] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    console.log("effect");
    setInit(true);
    getComicsList();
    // eslint-disable-next-line
  }, []);

  const onLoaded = (newComicsList) => {
    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setOffset((offset) => offset + 8);
    setNewItemsLoading(false);
    setInit(false);
    console.log("loaded");
  };

  const getComicsList = () => {
    setNewItemsLoading(true);
    getAllComics(offset).then(onLoaded);
    console.log("getList");
  };

  const createComicsList = () => {
    console.log("create");
    return comicsList.map(({ title, details, thumb, price }, i) => {
      return (
        <li className="comics__item" key={i} tabIndex={0}>
          <a href={details}>
            <img src={thumb} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">{title}</div>
            <div className="comics__item-price">{price} </div>
          </a>
        </li>
      );
    });
  };
  const btnStyle = newItemsLoading
    ? { opacity: 0.4 }
    : offset >= 52700
    ? { display: "none" }
    : null;
  return (
    <div className="comics__list">
      {error ? (
        ErrorMessage
      ) : loading && init ? (
        <Spinner />
      ) : (
        <ul className="comics__grid">{createComicsList()}</ul>
      )}

      <button
        className="button button__main button__long"
        onClick={getComicsList}
        disabled={newItemsLoading}
        style={btnStyle}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
