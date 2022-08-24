import { useState, useEffect } from "react";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";

const RandomChar = (props) => {
  const [character, setCharacter] = useState({
      name: "",
      description: "",
      thumb: "",
      wiki: "",
      details: "",
    }),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(false);

  useEffect(() => updateCharacter(), []);

  const marvelService = new MarvelService();

  const onloading = () => {
    setLoading(true);
    setError(false);
  };
  const onLoaded = (character) => {
    setCharacter(character);
    setLoading(false);
  };
  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateCharacter = () => {
    onloading();
    const id = +(Math.random() * 400).toFixed(0) + 1009300;
    marvelService.getCharacter(id).then(onLoaded).catch(onError);
  };

  return (
    <div className="randomchar">
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <View char={character} />
      )}

      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main" onClick={updateCharacter}>
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumb, wiki, details } = char;
  let fixedDescription;
  if (description.length <= 0) {
    fixedDescription = "There is not any description of the character.";
  } else if (description.length > 150) {
    fixedDescription = description.slice(150) + "...";
  } else {
    fixedDescription = description;
  }
  const imgLessStyle =
    thumb ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? { objectFit: "fill" }
      : null;

  return (
    <div className="randomchar__block">
      <img
        src={thumb}
        alt={name}
        className="randomchar__img"
        style={imgLessStyle}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{fixedDescription}</p>
        <div className="randomchar__btns">
          <a href={details} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
