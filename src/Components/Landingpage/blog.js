import React from "react";
import leaf from "../../Image/leaf.png";
import container from "../../Image/containers.png";
import eucalyptus from "../../Image/eucalyptus.png";
import pottedPlant from "../../Image/potted-plant.png";
const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="top">
        <img src={leaf} alt="leaf.png" />
        <h3>Read Our Blog</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="bottom">
        <span>
          <img src={container} alt="blog" />
          <h4>Blog Post One</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p>Read More</p>
        </span>
        <span>
          <img src={pottedPlant} alt="blog" />
          <h4>Blog Post Two</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p>Read More</p>
        </span>
        <span>
          <img src={eucalyptus} alt="blog" />
          <h4>Blog Post Three</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p>Read More</p>
        </span>
      </div>
    </div>
  );
};

export default Blog;
