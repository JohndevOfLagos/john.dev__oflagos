import React from "react";
import "./LandingPage.scss";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="inner-landingpage">
        <div className="hero-left-container">
          <span className="hero-name">
            <h5>
              Hey, i'm John Adewunmi <Icon icon="tdesign:wave-left" />
            </h5>
            <h3>
              Diligent Frontend Developer with 2+ years of related experience in
              the field.
            </h3>
          </span>

          <div className="hero-left-button-container">
            <Link class="main-button w-inline-block" to="/Home/contact">
              <span>Contact</span>
              <Icon icon="mingcute:external-link-line" />
            </Link>
            <Link to="" target="_blank" class="secondary-button w-inline-block">
              <p class="hover-underline-animation">
                Book A Free Consultation Call
              </p>
              <Icon icon="solar:call-dropped-rounded-linear" />
            </Link>
          </div>

          <div className="hero-left-scroll">
            <div className="vertical-text">Scroll</div>
            <div className="animated-line"></div>
          </div>
        </div>
        <div className="hero-right-img-container">
          <div className="img-parent is-hero">
            <div className="img-child-1 img-1">
              <div className="card-whipe-heroimg bg-cream-shade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
