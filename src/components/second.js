import React from "react";
import "./second.css";

const NavBar = () => {
  return (
    <div className="grid-container">
      <div className="grid-item1">
        <h3>
          Contact our support team <br />
          to grow your business
        </h3>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio <br />
          cumque nihil impedit quo minus id quod maxime placeat
          <br /> facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus.
        </p>
        <br />
        <h1>Image not provided</h1>
      </div>
      <div className="grid-item2">
        <h3>Send us a message</h3>
        <form action="#" name="contact-form">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            autoComplete="off"
          ></input>
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            autoComplete="off"
          ></input>
          <input
            name="phone"
            type="text"
            required
            placeholder="Phone"
            autoComplete="off"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            style={{ height: "190px" }}
          ></textarea>
          <br />
          <br />
          <p>Please check the box below to proceed</p>
          <br />
          <div className="chk-background">
            <input id="cb" type="checkbox"></input>
            <label for="cb" className="chbox">
              I am not a robot
            </label>
          </div>
          <br />
          <button className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
