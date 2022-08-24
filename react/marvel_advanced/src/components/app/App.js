// import { useState } from "react";

import ComicsList from "../comicsList/ComicsList";
import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";

// import decoration from "../../resources/img/vision.png";

const App = () => {
  // const [characterId, setCharacterId] = useState(null);

  // const getChar = (characterId) => {
  //   setCharacterId(characterId);
  // };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ComicsList />
        {/* <ErrorBoundary>
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
        <img className="bg-decoration" src={decoration} alt="vision" /> */}
      </main>
    </div>
  );
};

export default App;
