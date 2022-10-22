import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
	const { name, imageUrl, price, quantity } = checkoutItem;

	const { removeCardFromCheckout, removeItemFromCart, addItemToCart } =
		useContext(CartContext);

	const decreaseItemCount = () => removeItemFromCart(checkoutItem);
	const increaseItemCount = () => addItemToCart(checkoutItem);
	const removeCard = () => removeCardFromCheckout(checkoutItem);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<div className="name">{name}</div>
			<div className="quantity">
				<div onClick={decreaseItemCount} className="arrow">
					&#10094;
				</div>
				<div className="value">{quantity}</div>

				<div onClick={increaseItemCount} className="arrow">
					&#10095;
				</div>
			</div>
			<div className="price">${price}</div>
			<div className="remove-button" onClick={removeCard}>
				&#10005;
			</div>
		</div>
	);
};
export default CheckoutItem;
