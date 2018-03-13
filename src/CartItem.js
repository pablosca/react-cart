import React from 'react';

const CartItem = (props) => (
	<div className="cart-row cart-item">
		<div className="cart-cell cart-product">
			<img className="cart-product-image" src="http://via.placeholder.com/156x156" alt="" />
			<div className="cart-product-info">
				<span className="cart-product-brand">{props.product.brand}</span>
				<h3 className="cart-product-title">{props.product.name}</h3>
				<div className="cart-product-options">
					<span className={'swatch swatch-' + props.product.options.color}></span>
					<strong>{props.product.options.color}</strong>
					<span className="cart-product-options-separator"></span>
					size: <strong>{props.product.options.size}</strong>
				</div>
				<div className="cart-product-actions">
					<a href="#change">Change</a>
					<a href="#delete">Delete</a>
				</div>
			</div>
		</div>
		<div className="cart-cell cart-quantity">
			<button className="cart-quantity-btn">&minus;</button>
			<input className="cart-quantity-field" type="number" defaultValue="1" />
			<button className="cart-quantity-btn">+</button>
		</div>
		<div className="cart-cell cart-price"><strong>{props.product.price} SEK</strong></div>
	</div>
);

export default CartItem;