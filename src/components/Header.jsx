import React from "react";

function Header() {
    return(
        <div className="header">
            <h1><a href="/">second chance books</a></h1>
            <div className="label-container">
                <h1 className="label"><a href="/">All</a></h1>
                <h1 className="label"><a href="/fiction">Fiction</a></h1>
                <h1 className="label"><a href="/nonfiction">Nonfiction</a></h1>
            </div>
            <div className="remaining">
                <input type="text" placeholder="Search by genre, title, and more"/>
                <button className="search"><img src={require("./images/Eyeglass.png")} alt="Eyeglass"></img></button>
                <img className="cart" width="25px" src={require("./images/cart.png")}></img>
                <div className="dropdown">
                    <button onClick={display} className="dropdown"><img src={require("./images/dropdown.png")}/></button>
                    <h1 id="label" className="dropdown-label"><a href="/">All</a></h1>
                    <h1 id="label-2" className="dropdown-label"><a href="/fiction">Fiction</a></h1>
                    <h1 id="label-3" className="dropdown-label"><a href="/nonfiction">Nonfiction</a></h1>
                </div>
            </div>
        </div>
    );
}

function display() {
    var x = document.getElementById("label");
    console.log(x.style.display);
    if (x.style.display === "none" || x.style.display  == "") {
      x.style.display = "block";
      x = document.getElementById("label-2");
      x.style.display = "block";
      x = document.getElementById("label-3");
      x.style.display = "block";
    } else {
      x.style.display = "none";
      x = document.getElementById("label-2");
      x.style.display = "none";
      x = document.getElementById("label-3");
      x.style.display = "none";
    }
  }

export default Header;