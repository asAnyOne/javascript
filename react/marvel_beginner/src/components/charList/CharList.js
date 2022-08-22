import { Component } from "react";

import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
  state = {
    list: [],
    loading: true,
    error: false,
    count: 9,
  };

  marvelService = new MarvelService();
  onLoading = () => {
    this.setState({ loading: true, error: false });
  };
  onLoaded = (list) => {
    this.setState({ list, loading: false });
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };

  componentDidMount() {
    this.getCharList(this.state.count);
  }
  getCharList = (count) => {
    this.onLoading();
    this.marvelService
      .getAllCharacters(count)
      .then(this.onLoaded)
      .catch(this.onError);
  };
  createCharList = () => {
    return this.state.list.map(({ id, name, thumb }) => {
      const styleImgLess =
        thumb ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          ? { objectFit: "fill" }
          : null;
      return (
        <li
          className="char__item"
          key={id}
          onClick={() => this.props.getCharacter(id)}
        >
          <img src={thumb} alt={name} style={styleImgLess} />
          <div className="char__name">{name} </div>
        </li>
      );
    });
  };

  onAddCharacters = () => {
    const count = this.state.count + 9;
    this.setState({ count });
    this.getCharList(count);
  };

  render() {
    return (
      <div className="char__list">
        <ul className="char__grid">{this.createCharList()}</ul>
        <button
          className="button button__main button__long"
          onClick={this.onAddCharacters}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
