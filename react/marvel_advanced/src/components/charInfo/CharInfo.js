import { useEffect, useState } from "react";

import useMarvelService from "../../services/MarvelService";
import setComponent from "../../utils/setComponent";

import "./charInfo.scss";

const CharInfo = (props) => {
  const [character, setCharacter] = useState(null);

  const { process, setProcess, getCharacter } = useMarvelService();

  const onLoaded = (data) => setCharacter(data);

  const getSelectedCharacterInfo = (characterId) => {
    if (!characterId) return;
    getCharacter(characterId)
      .then(onLoaded)
      .then(() => setProcess("confirmed"));
  };

  useEffect(() => {
    getSelectedCharacterInfo(props.characterId);
    // eslint-disable-next-line
  }, [props.characterId]);

  return (
    <div className="char__info">{setComponent(process, View, character)}</div>
  );
};

const View = ({ data }) => {
  const { name, description, thumb, wiki, details, comics } = data;
  const list = (item) => {
    return item.map((item, i) => {
      return (
        <li key={i} className="char__comics-item">
          {item.name}
        </li>
      );
    });
  };
  const comicsList = comics.length > 9 ? list(comics.splice(10)) : list(comics);

  return (
    <>
      <div className="char__basics">
        <img
          src={thumb}
          alt={name}
          style={
            thumb ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
              ? { objectFit: "fill" }
              : null
          }
        />
        <div>
          <div className="char__info-name">{name} </div>
          <div className="char__btns">
            <a href={details} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description || "There is not any description about character"}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">{comicsList}</ul>
    </>
  );
};

export default CharInfo;
