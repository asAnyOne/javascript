import Category from "../category/category.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => (
	<div className="directory-container">
		{categories.map((catigory) => (
			<Category key={catigory.id} {...catigory} />
		))}
	</div>
);

export default Directory;
