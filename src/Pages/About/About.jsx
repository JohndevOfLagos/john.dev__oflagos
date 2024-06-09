import React from "react";
import "./About.scss";

export const About = () => {
  return (
    <div className="About">
      <div className="about-inner">
        <div className="about-me">
          <span>
            About me
            <span>.</span>
          </span>
          <div className="about-me-discription">
            <span>
            Crafting beautiful and functional websites is my passion. I dedicate myself fully to every new challenge, ensuring high-quality results. Let's create something remarkable together.
            </span>
          </div>
        </div>
        <div className="about-info">
          <div className="my-stack">
            <h4>My Stack</h4>
            <ul className="stack-container">
              <li>Web Design</li>
              <li>UI/UX Expertise</li>
              <li>HTML</li>
              <li>Involve Team Player</li>
              <li>JavaScript Proficiency</li>
              <li>Building interfaces</li>
              <li>data flows</li>
              <li>optimizing build process</li>
            </ul>
          </div>
          <div className="my-special-places">
            <h4>My Special Places</h4>
            <ul className="special-places-container">
              <li>Stack Overflow</li>
              <li>GitHub</li>
              <li>Reddit</li>
              <li>MDN Web Docs</li>
              <li>Udemy</li>
              <li>Visual Studio Code</li>
              <li>Runjs</li>
              <li>CSS-Tricks</li>
              <li>Dribble</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
