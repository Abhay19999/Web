import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="main-div" style={{ backgroundColor: "silver" }}>
      <header>
        <a href="#" className="logo">
          easysocial
        </a>
        <input type="checkbox" id="menu-bar"></input>
        <label for="menu-bar">Menu</label>
        <nav className="navbar">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <button className="login">Login </button>
          </ul>
        </nav>
      </header>
      <div className="header-content">
        <h2>Contact Us</h2>
        <h4>Home/Contact Us</h4>
      </div>
    </div>
  );
};

export default Header;
