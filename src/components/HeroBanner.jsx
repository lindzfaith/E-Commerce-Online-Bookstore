import React from "react";

function HeroBanner() {
    return(
        <div className="hero-banner-container">
            <div className="info">
                <label> Shop / </label>
                <label className="black-font">{name}</label>
            </div>
            <h1>{val}</h1>
        </div>
    );
}

var val = "Shop Now";
var name = "All";
if (window.location.pathname == "/fiction") {
    name = "Fiction";
} else if (window.location.pathname == "/nonfiction") {
    name = "Nonfiction";
} else if (window.location.pathname == "/") {
    name = "All";
} else {
    name = "Product";
    val = "...";
}

export default HeroBanner;