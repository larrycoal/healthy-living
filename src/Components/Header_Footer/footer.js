import React from "react";
import logo from "../../Image/logo.png";
import facebook from "../../Image/facebook.png";
import instagram from "../../Image/instagram.png";
import linkedin from "../../Image/linkedin.png";
const footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
          <p>  Copyright 2020 Nature</p>
        </div>
        <div className="nfo">
          <p>Information</p>
          <span>
            <a href="/">About Us</a>
            <a href="/">Products</a>
            <a href="/">Contact Us</a>
            <a href="/">Terms of service</a>
          </span>
        </div>
        <div className="follow">
          <p>Follow us</p>
          <span>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="facebook" />
            <img src={linkedin} alt="facebook" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;
