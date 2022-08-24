import { useEffect, useState } from "react";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";

const CharList = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(1520);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const marvelService = new MarvelService();
  const onLoading = () => {
    setError(false);
    setNewItemsLoading(true);
  };
  const onLoaded = (newlist) => {
    setList((list) => [...list, ...newlist]);

    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
  };
  const onError = () => setError(true);
  // eslint-disable-next-line
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
          tabIndex={0}
          style={
            id === selectedItemId
              ? {
                  boxShadow: "0 20px 30px rgb(15, 200, 200)",
                  transform: "translateY(-8px)",
                }
              : null
          }
          onClick={() => {
            props.getCharacter(id);
            setSelectedItemId(id);
          }}
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
