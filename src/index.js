import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {Header, HeroBanner, ProductContainer, ProductDetails, RecommendedContainer} from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <HeroBanner/>
    {productDetails()}
    {recommendedContainer()}

  </React.StrictMode>
);

function productDetails() {
  if (window.location.pathname != "/"
  && window.location.pathname != "/fiction"
  && window.location.pathname != "/nonfiction") {
    return (
    <ProductDetails/> 
    );
  } else {
    return <ProductContainer/>;
  }
}

function recommendedContainer() {
  if (window.location.pathname != "/"
  && window.location.pathname != "/fiction"
  && window.location.pathname != "/nonfiction") {
    return (
    <RecommendedContainer/> 
    );
  } 
    return;
}

