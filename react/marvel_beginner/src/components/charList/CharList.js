import React, { Component } from "react";

import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		offset: 1520,
		newItemsLoading: false,
		selectedItemId: null,
	};

	marvelService = new MarvelService();
	onLoading = () => {
		this.setState({
			loading: true,
			error: false,
			newItemsLoading: true,
		});
	};
	onLoaded = (newlist) => {
		this.setState(({ charList, offset }) => ({
			charList: [...charList, ...newlist],
			loading: false,
			newItemsLoading: false,
			offset: offset + 9,
		}));
	};
	onError = () => {
		this.setState({
			loading: false,
			error: true,
		});
	};

	componentDidMount() {
		this.getCharList();
	}
	getCharList = () => {
		const offset = this.state.offset;
		this.onLoading();
		this.marvelService
			.getAllCharacters(offset)
			.then(this.onLoaded)
			.catch(this.onError);
	};

	createCharList = () => {
		return this.state.charList.map(({ id, name, thumb }) => {
			const imagelessUrl =
				"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
			const styleImgLess =
				thumb === imagelessUrl
					? {
							objectFit: "fill",
					  }
					: null;
			const styleCharListItem =
				id === this.state.selectedItemId
					? {
							boxShadow: "0 20px 30px rgb(15, 200, 200)",
							transform: "translateY(-8px)",
					  }
					: null;
			const onGetCharIdClick = () => {
				this.props.getCharacter(id);
				this.setState({
					selectedItemId: id,
				});
			};

			return (
				<li
					ref={this.selectedItemRef}
					className="char__item"
					key={id}
					tabIndex={0}
					style={styleCharListItem}
					onClick={onGetCharIdClick}
				>
					<img src={thumb} alt={name} style={styleImgLess} />
					<div className="char__name">{name} </div>
				</li>
			);
		});
	};

	render() {
		const { newItemsLoading, offset } = this.state;
		const btnStyle =
			(offset >= 1562 && { display: "none" }) ||
			(newItemsLoading && { opacity: 0.4 }) ||
			null;

		return (
			<div className="char__list">
				<ul className="char__grid">{this.createCharList()}</ul>
				<button
					disabled={newItemsLoading}
					style={btnStyle}
					className="button button__main button__long"
					onClick={this.getCharList}
				>
					<div className="inner">load more</div>
				</button>
			</div>
		);
	}
}

export default CharList;
