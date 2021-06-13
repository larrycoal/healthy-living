'"use strict";'
import React from 'react';
import flower from '../../Image/flower.png'



const header = () => {
    return (
        <nav className="header-wrapper">
          <div className="header-left">
              <img src={flower} alt="logo"/>
              <h2>Organic</h2>
          </div>
          <div className="header-right">
              <a className="active" href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">Blog</a>
              <a href="/">About Us</a>
              <button>Contact</button>
          </div>
        </nav>
    );
};

export default header;