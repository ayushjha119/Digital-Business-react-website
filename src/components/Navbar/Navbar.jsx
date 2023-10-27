import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="container">
        <div className="n-container">
          {/* leftside */}
          <div className="n-logo">
            <span>AYUSH-JHA</span>
          </div>

          {/* rightside */}
          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in</span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>
    </div>
  );
};
