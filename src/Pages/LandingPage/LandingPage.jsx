import React from "react";
import "./LandingPage.scss";

import ProfImage from "../../Assets/image/whatsApp.jpeg";
import { Icon } from "@iconify/react";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="hero">
        <div className="hero-left">
          <span className="hero-name">
            <h5>Hey, i'm John Adewunmi <Icon icon="tdesign:wave-left" /></h5>
            <h3>Frontend Developer</h3>
            <h6 className="hero-quote">
              I'm a Frontend Developer from Nigeria. In IT, change is constant.
              Embracing new tech, updating skills keeps me fulfilled.
            </h6>
          </span>

          <div className="hero-left-button">
            <button>Contact<Icon icon="mingcute:external-link-line" /></button>
            <button>Book A Free Consultation Call</button>
          </div>
          

        </div>
        <div className="hero-right">
          <img src={ProfImage} alt="" className="hero-photo-img"/>
        </div>

      </div>
      <div className="hero-left-scroll">
          <div className="vertical-text">Scroll</div>
          <div className="animated-line"></div>
          </div>
      
    </div>
  );
};
