import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productAdd.id
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) => {
			return cartItem.id === productAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	} else {
		return [...cartItems, { ...productAdd, quantity: 1 }];
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productAdd) => {
		setCartItems(addCartItem(cartItems, productAdd));
	};
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
