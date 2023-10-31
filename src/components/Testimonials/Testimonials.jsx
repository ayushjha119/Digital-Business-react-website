import "./Testimonials.css";
import React from "react";
import SlickSlider from "./SlickSlider";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonials</span>
            <span className="title">
              Access Capital That Complements Traditional Funding Options
            </span>
            <span className="des">What people say about us</span>
          </div>
        </div>
        {/* sliders */}
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testimonials;
