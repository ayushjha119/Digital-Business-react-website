"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div className="n-wrapper">
      {/* desktop version */}
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

      {/* mobile tab version */}
      <div className="nm-container">
        {/* logo */}
        <span>AYUSH-JHA</span>

        {/* menu icon */}

        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile-menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};
