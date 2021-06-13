import React from "react";
import HeaderFooter from "../Header_Footer";
import Hero from "./hero";
import Featured from "./featured"
import TestimonialsContact from "./testimonials-contact"
import Blog from "./blog"
const LandingPage = () => {
  return (
    <HeaderFooter>
      <Hero />
      <Featured/>
      <TestimonialsContact/>
      <Blog/>
    </HeaderFooter>
  );
};

export default LandingPage;
