import React from "react";
import Link from 'next/link'

function Product(props) {
    return(
        <div className="product-container">
            <Link href={`/product/${props.slug}`}>
                <img alt="Product" src={require("./images/" + props.path)}/>
                <h1>{props.name}</h1>
                <h3>{props.author}</h3>
                <h2>${props.price}</h2>
            </Link>
        </div>
    );
}
export default Product;