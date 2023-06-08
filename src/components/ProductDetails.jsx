import React, { useState } from "react";
import {products} from './products.js';
import { useStateContext } from '../context/StateContext';

var product = products[0];
let slug = window.location.pathname;
slug = slug.slice(9, slug.length);
for (let i = 0; i < products.length; i++) {
    if (slug == products[i].slug) {
        product = products[i];
    }
}

function ProductDetails() {
    return(
        <div className="product-details-container">
            <img alt="Product" src={require("./images/" + product.path)}/>
            <div className="details">
                <h2>{product.name} </h2>
                <h2>by {product.author}</h2>
                <h3>${product.price}</h3>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    )
}  

export default ProductDetails