import { useEffect, useState } from "react";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";

const CharList = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(1520);
  const [newItemsLoading, setNewItemsLoading] = useState(false);

  const marvelService = new MarvelService();
  const onLoading = () => {
    setError(false);
    setNewItemsLoading(true);
  };
  const onLoaded = (newlist) => {
    setList([...list, ...newlist]);

    setNewItemsLoading(false);
    setOffset(offset + 9);
  };
  const onError = () => setError(true);

  useEffect(() => getCharList(offset), []);

  const getCharList = (offset) => {
    onLoading();
    marvelService.getAllCharacters(offset).then(onLoaded).catch(onError);
  };

  const createCharList = () => {
    return list.map(({ id, name, thumb }) => {
      const styleImgLess =
        thumb ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          ? { objectFit: "fill" }
          : null;
      return (
        <li
          className="char__item"
          key={id}
          onClick={() => props.getCharacter(id)}
        >
          <img src={thumb} alt={name} style={styleImgLess} />
          <div className="char__name">{name} </div>
        </li>
      );
    });
  };

  return (
    <div className="char__list">
      {error ? (
        <ErrorMessage />
      ) : (
        <ul className="char__grid">{createCharList()}</ul>
      )}

      <button
        disabled={newItemsLoading}
        style={
          newItemsLoading
            ? { opacity: 0.4 }
            : offset >= 1562
            ? { display: "none" }
            : null
        }
        className="button button__main button__long"
        onClick={() => getCharList(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
