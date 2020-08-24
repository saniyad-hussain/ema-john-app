import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By {seller}</small></p>
                <p><strong>${price}</strong></p>
                <p>Only {stock} left in stock -- order soon</p>
                <button className="main-btn" onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={ faShoppingCart } /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;