import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const [comic, setComic] = useState({});

  const { comicId } = useParams();

  const { loading, error, clearError, getComic } = useMarvelService();

  const onLoaded = (comic) => setComic(comic);

  const getSelectedComicInfo = (comicId) => {
    clearError();
    getComic(comicId).then(onLoaded);
  };

  useEffect(() => {
    getSelectedComicInfo(comicId);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="single-comic">
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className="single-comic">
        <ErrorMessage />
      </div>
    );
  }
  const { title, description, thumb, pageCount, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumb} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name"> {title} </h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr"> {pageCount} pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">{price} </div>
      </div>
      <NavLink
        to="/comics"
        className="single-comic__back"
        style={{ color: "red", textDecoration: "underline" }}
      >
        Back to all
      </NavLink>
    </div>
  );
};

export default SingleComicPage;
