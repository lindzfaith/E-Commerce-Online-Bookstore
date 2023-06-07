import React from "react";
import {Product} from './';
import {products} from './products.js';

function ProductContainer() {
    return(
        <div className="products-container">
            {books?.map(
          (book) => <Product name=
          {book.name} path={book.path} price={book.price}
          author={book.author} slug={book.slug}/> )}
        </div>
    );
}

var books = [...products];

if (window.location.pathname == "/fiction") {
    for (let i = 0; i < books.length; i++) {
        if (books[i].type == "Nonfiction") {
            books.splice(i, 1);
            i--;
        }
    }
}

if (window.location.pathname == "/nonfiction") {
    for (let i = 0; i < books.length; i++) {
        if (books[i].type == "Fiction") {
            books.splice(i, 1);
            i--;
        }
    }
}

export default ProductContainer;