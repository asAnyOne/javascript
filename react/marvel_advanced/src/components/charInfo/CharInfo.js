import { useEffect, useState } from "react";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

const CharInfo = (props) => {
  const [character, setCharacter] = useState(null),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(false);

  const marvelService = new MarvelService();

  const onLoading = () => setLoading(true);
  const onLoaded = (character) => {
    setCharacter(character);
    setLoading(false);
    setError(false);
  };

  const onError = () => setError(true);

  const getSelectedCharacterInfo = (characterId) => {
    if (!characterId) return;
    onLoading();
    marvelService.getCharacter(characterId).then(onLoaded).catch(onError);
  };
  useEffect(() => {
    getSelectedCharacterInfo(props.characterId);
  }, [props.characterId]);

  if (!character) {
    return (
      <div className="char__info">
        <Skeleton />
      </div>
    );
  } else if (loading) {
    return (
      <div className="char__info">
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className="char__info">
        <ErrorMessage />
      </div>
    );
  }
  const { name, description, thumb, wiki, details, comics } = character;
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
    <div className="char__info">
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
        {description
          ? description
          : "There is not any description about character"}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">{comicsList}</ul>
    </div>
  );
};

export default CharInfo;
