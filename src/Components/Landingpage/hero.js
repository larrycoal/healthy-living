import React from 'react';
import flower from '../../Image/flower.png'
import rose from '../../Image/rose.png'
const Hero = () => {
    return (
        <div className="hero-wrapper">
            <section className="left">
                <h3>Healthy Life With</h3>
                <h1>Nature Organic</h1>
                <p>vegetable are the edible part of a plant that is used in cooking or can be eaten now</p>
                <button>Explore Now</button>
            </section>
            <section className="right">
                <img src={flower} alt="flower.png"/>
                <img src={rose} alt = "rose.png"/>
            </section>
        </div>
    );
};

export default Hero;