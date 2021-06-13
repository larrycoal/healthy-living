import React from "react";
import branch from "../../Image/branch.png";
import quotation from "../../Image/quotation.png";
import woman from "../../Image/woman.png";

const TestimonialsContact = () => {
  return (
    <div className="testimonial-contact-wrapper">
      <div>
        <img src={branch} alt="branch.png" />
      </div>
      <div className="testimonial">
        <img src={quotation} alt="branch.png" />
        <img src={woman} alt="branch.png" />
        <p>Jane Doe</p>
        <span>
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p className="subtitle">
          Thank you for all the amazing produce and products you deliver each
          week… you make my life so easy an bring goodness into our family
          eating. I’ve been roasting a lot of brussel sprouts
        </p>
        <div className="pagination">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form>
            <input type="email" placeholder="Enter your Email Address"/>
            <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialsContact;
