import { useNavigate } from "react-router-dom";

import "./category.styles.scss";

const Category = ({ title, imageUrl }) => {
	const navigate = useNavigate();
	const handleNavigate = () => navigate(`shop/${title}`);

	return (
		<div className="category-container" onClick={handleNavigate}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default Category;
