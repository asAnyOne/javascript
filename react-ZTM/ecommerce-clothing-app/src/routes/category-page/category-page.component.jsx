import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category-page.styles.scss";

const CategoryPage = () => {
	const { category } = useParams();
	const { categories } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<h2 className="category-page-title">{category.toUpperCase()}</h2>
			<div className="category-page-container">
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</>
	);
};
export default CategoryPage;
