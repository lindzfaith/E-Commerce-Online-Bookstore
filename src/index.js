import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {Header, HeroBanner, ProductContainer, ProductDetails} from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <HeroBanner/>
    {productDetails()}
  </React.StrictMode>
);

function productDetails() {
  if (window.location.pathname != "/"
  && window.location.pathname != "/fiction"
  && window.location.pathname != "/nonfiction") {
    return <ProductDetails/>;
  } else {
    return <ProductContainer/>;
  }
}
