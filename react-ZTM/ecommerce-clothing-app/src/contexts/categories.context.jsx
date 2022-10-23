import { createContext, useState, useEffect } from "react";

import { getCollectionAndDocument } from "../utils/firebase/firebase.util";

export const CategoriesContext = createContext({
	categories: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState({});
	useEffect(() => {
		const getCategoriesMap = async () => {
			getCollectionAndDocument().then((data) => setCategories(data));
		};
		getCategoriesMap();
	}, []);

	const value = { categories, setCategories };

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
