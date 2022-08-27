import { Link } from "react-router-dom";

import "./singleComicLayout.scss";

const SingleComicLayout = ({ data }) => {
  const { title, description, pageCount, thumb, price } = data;

  return (
    <>
      <div className="single-comic">
        <img src={thumb} alt={title} className="single-comic__img" />
        <div className="single-comic__info">
          <h2 className="single-comic__name">{title}</h2>
          <p className="single-comic__descr">
            {description || "There is no description"}
          </p>
          <p className="single-comic__descr">{pageCount} pages</p>
          <p className="single-comic__descr">Language: En</p>
          <div className="single-comic__price">
            {price || "price is unknown"}
          </div>
        </div>
        <Link to="/comics" className="single-comic__back">
          Back to all
        </Link>
      </div>
    </>
  );
};

export default SingleComicLayout;
