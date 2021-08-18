import React from "react";
import "./forth.css";

const Forth = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="flex1">
          <h3>easysocial</h3>
          <p>Kickstart your bussiness online</p>
        </div>
        <div className="flex2">
          <div className="con1">
            <h4>Easysocial</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="con2">
            <h4>Products</h4>
            <ul>
              <li>Reach</li>
              <li>Engage</li>
              <li>Sell</li>
              <li>Shop</li>
              <li>Deliver</li>
            </ul>
          </div>
          <div className="con3">
            <h4>Industries</h4>
            <ul>
              <li>Education</li>
              <li>Ggrocery</li>
              <li>Automobile</li>
              <li>Cafe, resturant</li>
            </ul>
          </div>
          <div className="con4">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forth;
