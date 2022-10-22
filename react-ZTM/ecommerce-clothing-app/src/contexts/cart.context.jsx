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

const removeCartItem = (cartItems, productRemove) => {
	const remainderCartItems = cartItems.map((cartItem) => {
		return cartItem.id === productRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
	return remainderCartItems.filter((cartItem) => cartItem.quantity !== 0);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	removeCardFromCheckout: () => {},
	cartCount: 0,
	cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const cartTotalPrice = cartItems.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.quantity,
			0
		);
		setCartCount(newCartCount);

		setCartTotalPrice(cartTotalPrice);
	}, [cartItems]);

	const addItemToCart = (productAdd) => {
		setCartItems(addCartItem(cartItems, productAdd));
	};
	const removeItemFromCart = (productRemove) => {
		setCartItems(removeCartItem(cartItems, productRemove));
	};
	const removeCardFromCheckout = (cardToRemove) => {
		const filteredCart = cartItems.filter(
			(cartItem) => cartItem.id !== cardToRemove.id
		);
		setCartItems(filteredCart);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		removeCardFromCheckout,
		cartItems,
		cartCount,
		cartTotalPrice,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
