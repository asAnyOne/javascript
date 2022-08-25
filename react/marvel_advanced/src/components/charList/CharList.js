import { useEffect, useState } from "react";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";

const CharList = (props) => {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(1520);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { error, getAllCharacters } = useMarvelService();

  const onLoaded = (newlist) => {
    setList((list) => [...list, ...newlist]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
  };

  // eslint-disable-next-line
  useEffect(() => getCharList(offset), []);

  const getCharList = (offset) => {
    setNewItemsLoading(true);
    getAllCharacters(offset).then(onLoaded);
  };

  const createCharList = () => {
    return list.map(({ id, name, thumb }, i) => {
      const styleImgLess =
        thumb ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          ? { objectFit: "fill" }
          : null;
      return (
        <li
          className="char__item"
          key={i}
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
