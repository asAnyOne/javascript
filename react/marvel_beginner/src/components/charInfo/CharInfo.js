import { Component } from "react";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

class CharInfo extends Component {
  state = {
    character: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  onLoading = () => {
    this.setState({ loading: true });
  };
  onLoaded = (character) =>
    this.setState({ character, loading: false, error: false });
  onError = () => this.setState({ error: true });

  getSelectedCharacterInfo = () => {
    const { characterId } = this.props;
    if (!characterId) return;

    this.onLoading();
    this.marvelService
      .getCharacter(characterId)
      .then(this.onLoaded)
      .catch(this.onError);
  };
  componentDidMount() {
    this.getSelectedCharacterInfo();
  }
  componentDidUpdate(prevProps) {
    if (this.props.characterId !== prevProps.characterId) {
      this.getSelectedCharacterInfo();
    }
  }

  render() {
    if (!this.state.character) {
      return (
        <div className="char__info">
          <Skeleton />
        </div>
      );
    } else if (this.state.loading) {
      return (
        <div className="char__info">
          <Spinner />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="char__info">
          <ErrorMessage />
        </div>
      );
    }
    const { name, description, thumb, wiki, details, comics } =
      this.state.character;
    const list = (item) => {
      return item.map((item, i) => {
        return (
          <li key={i} className="char__comics-item">
            {item.name}
          </li>
        );
      });
    };
    const comicsList =
      comics.length > 9 ? list(comics.splice(10)) : list(comics);

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
  }
}

export default CharInfo;
