import React from "react";
import leaf from "../../Image/leaf.png";
import organicFoodDark from "../../Image/organic-food-dark.png";
import organicFoodLight from "../../Image/organic-food-light.png";
import greenryOne from "../../Image/greenry-one.png"
import greenryTwo from "../../Image/greenry-two.png"
import greenryThree from "../../Image/greenry-three.png"
const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div className="nature">
        <div className="top">
          <img src={leaf} alt="leaf.png" />
          <h3>Welcome to Nature</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bottom">
          <img src={organicFoodLight} alt="organicfood.png" />
          <img src={organicFoodDark} alt="organicfood.png" />
          <img src={organicFoodLight} alt="organicfood.png" />
          <img src={organicFoodLight} alt="organicfood.png" />
        </div>
      </div>
      <div className="present">
        <div className="top">
          <h3>Proudly presented by</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bottom">
          <img src={greenryOne} alt="organicfood.png" />
          <img src={greenryThree} alt="organicfood.png" />
          <img src={greenryTwo} alt="organicfood.png" />
          <img src={greenryThree} alt="organicfood.png" />
          <img src={greenryOne} alt="organicfood.png" />
        </div>
        <div className="pagination">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
