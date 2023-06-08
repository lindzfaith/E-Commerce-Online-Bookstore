import {products} from './products.js';
import { RecommendedProduct } from './'

var product = products[0];
let slug = window.location.pathname;
slug = slug.slice(9, slug.length);
var books = products;
for (let i = 0; i < books.length; i++) {
    if (books[i].slug === slug) {
        product = products[i];
        books.splice(i, 1);
        if (i !== 0) {
            i--;
        }
    }
}
// filter by what user is most likely to look at (author & genre)
var books2 = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].author === product.author || books[i].type === product.type) {
        books2.unshift(books[i]);
    } else {
        books2.push(books[i]);
    }
}
books = books2;

function RecommendedContainer() {
    return (
        <div className = "recommended-container">
            <div className = "own-line">
                <h1>Recommended</h1>
            </div>
            {books?.map(
          (book) => <RecommendedProduct name=
          {book.name} path={book.path} price={book.price}
          author={book.author} slug={book.slug}/> )}
        </div>
    );
}

export default RecommendedContainer

