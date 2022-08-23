import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";

class App extends Component {
  state = {
    characterId: null,
  };

  getChar = (characterId) => {
    this.setState({ characterId });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>

          <div className="char__content">
            <ErrorBoundary>
              <CharList getCharacter={this.getChar} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo characterId={this.state.characterId} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
