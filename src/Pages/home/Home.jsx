import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import ProfImage from "../../Assets/image/whatsApp.jpeg";
import { Icon } from "@iconify/react";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <span className="hero-name">
            <h5> Hi, i'm John,</h5>
            <h3>Frontend Developer</h3>
            <h6 className="hero-quote">
              I'm a Frontend Developer from Nigeria. In IT,
              change is constant. Embracing new tech, updating skills keeps me
              fulfilled.
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

      <div className="herobottom">
        <div className="box">
          <span></span>
          <span></span>
        </div>
        <div className="herobottom-body">
          <div className="herobottom-left">
            <span className="herobottom-head">Skill</span>
            <span className="herobottom-info">
              <span>
                Some of the newest
                <span>techology</span>
                that i use.
              </span>
            </span>
          </div>
   <div className="herobuttom-right">
   <ul >
            <li>
              <Icon icon="vscode-icons:file-type-html" />
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-css" />
            </li>
            <li>
              <Icon icon="tabler:brand-javascript" />
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-js-official" />
            </li>
            <li>
              <Icon icon="skill-icons:redux" />
            </li>
            <li>
              <Icon icon="cib:redux" />
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-light-netlify" />
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-firebase" />
            </li>
            <li>
              <Icon icon="cib:github" />
            </li>
          </ul>
   </div>
        </div>
      </div>
    </div>
  );
};
