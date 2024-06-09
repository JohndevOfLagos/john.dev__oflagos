import React from "react";
import "./LandingPage.scss";

import { Link } from "react-router-dom";
import ProfImage from "../../Assets/image/whatsApp.jpeg";
import { Icon } from "@iconify/react";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="hero">
        <div className="hero-left">
          <span className="hero-name">
            <h5> Hey, i'm John <Icon icon="tdesign:wave-left" /></h5>
            <h3>Frontend Developer</h3>
            <h6 className="hero-quote">
              I'm a Frontend Developer from Nigeria. In IT, change is constant.
              Embracing new tech, updating skills keeps me fulfilled.
            </h6>
          </span>

          <div className="hero-left-button">
            <button>Get In Touch</button>
            <button>Let's Start</button>
          </div>
          <div className="social-media-handle">
            <Link>
              <Icon icon="iconoir:instagram" />
            </Link>
            <Link>
              <Icon icon="ri:twitter-x-fill" />
            </Link>
            <Link>
              <Icon icon="mdi:linkedin" />
            </Link>
            <Link>
              <Icon icon="mdi:github" />
            </Link>
            <Link>
              <Icon icon="ic:baseline-tiktok" />
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={ProfImage} alt="" />
        </div>
      </div>

 
    </div>
  );
};
