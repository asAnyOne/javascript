import Button from "../button/button.components";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="empty-message"></div>
			<div className="cart-items"></div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
