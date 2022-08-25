import { useState } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [characterId, setCharacterId] = useState(null);

  const getChar = (characterId) => {
    setCharacterId(characterId);
  };
  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>

      <div className="char__content">
        <ErrorBoundary>
          <CharList getCharacter={getChar} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo characterId={characterId} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
