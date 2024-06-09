import React from "react";
import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="Skills">
      <div className="skills-inner">
        <div className="skills-head">
          <span>
            Skills
            <span>.</span>
          </span>
        </div>
        <div className="skill-box-list">
        <article className="skill-box-items">
          <h3>Frontend</h3>
          <div className="skill-box">
            <span>Html</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span>Css3/Sass</span>
            <div className="skill-bar">
              <span className="skill-per css3-sass">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span>JavaScript</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>
        </article>
        <article className="skill-box-items">
          <h3>Backend</h3>
        <div className="skill-box">
            <span>NodeJS</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>
        <div className="skill-box">
            <span>ReactJs</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
        <div className="skill-box">
            <span>Firebase</span>
            <div className="skill-bar">
              <span className="skill-per firebase">
                <span className="tooltip">35%</span>
              </span>
            </div>
          </div>
        </article>
      </div>
      </div>

    </div>
  );
};
