import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import TeaBayImage from "../../Assets/image/TeabayImage.jpg";
import TouristViewImage from "../../Assets/image/Touristview.jpg";
import PencreditImage from "../../Assets/image/PenCreditImage.jpg";

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="inner-project">
        <div className="project-head">
          <span>
            Projects
            <span>.</span>
          </span>
        </div>

        <div className="project-list">
          <article className="project-card">
            <div className="project-img-container">
              <img src={TeaBayImage} className="project-img" alt="" />
              <p className="project-date">october 19th, 2023</p>
            </div>
            <div className="project-info">
              <div className="project-title">
                <h4>Tea Bay</h4>
              </div>
              <p>
                TeaBay a user-focused site for flexible buying and ordering of various teas with diverse flavors.
              </p>
              <div className="project-tech-included">
                <span className="project-tech-included-head">
                  <Icon icon="grommet-icons:technology" />
                  <span>Technology stack includes</span>
                </span>
                <span className="project-tech-included-info">
                  <span>HTML5</span>
                  <span>
                    CSS3(SCSS)
                    <Icon icon="mdi:sass" />
                  </span>
                  <span>
                    JAVASCRIPT
                    <Icon icon="bxl:javascript" />
                  </span>
                  <span>
                    NETLIFY
                    <Icon icon="bxl:netlify" />
                  </span>
                </span>
              </div>
              <div className="project-footer">
                <Link className="project-external-link">
                  Teabay
                  <Icon icon="lucide:external-link" />
                </Link>
                <Link className="project-source-link">
                  sourcecode <Icon icon="mdi:github" />
                </Link>
              </div>
            </div>
          </article>
          <article className="project-card">
            <div className="project-img-container">
              <img src={TouristViewImage} className="project-img" alt="" />
              <p className="project-date">october 19th, 2023</p>
            </div>
            <div className="project-info">
              <div className="project-title">
                <h4>TouristView</h4>
              </div>
              <p>
                TouristView showcases global attractions and can scale into a
                booking app with hotel reservations.
              </p>
              <div className="project-tech-included">
                <span className="project-tech-included-head">
                  <Icon icon="grommet-icons:technology" />
                  <span>Technology stack includes</span>
                </span>
                <span className="project-tech-included-info">
                  <span>HTML5</span>
                  <span>
                    CSS3(SCSS)
                    <Icon icon="mdi:sass" />
                  </span>
                  <span>
                    JAVASCRIPT
                    <Icon icon="bxl:javascript" />
                  </span>
                  <span>
                    NETLIFY
                    <Icon icon="bxl:netlify" />
                  </span>
                </span>
              </div>
              <div className="project-footer">
                <Link className="project-external-link">
                  TouristView
                  <Icon icon="lucide:external-link" />
                </Link>
                <Link className="project-source-link">
                  sourcecode <Icon icon="mdi:github" />
                </Link>
              </div>
            </div>
          </article>
          <article className="project-card">
            <div className="project-img-container">
              <img src={PencreditImage} className="project-img" alt="" />
              <p className="project-date">febuary 3, 2024</p>
            </div>
            <div className="project-info">
              <div className="project-title">
                <h4>Pencredit</h4>
              </div>
              <p>
                Pencredit is a digital bank offering seamless online payments,
                bill pay, airtime, data, transfers, loans, and virtual cards.{" "}
              </p>
              <div className="project-tech-included">
                <span className="project-tech-included-head">
                  <Icon icon="grommet-icons:technology" />
                  <span>Technology stack includes</span>
                </span>
                <span className="project-tech-included-info">
                  <span>HTML5</span>
                  <span>
                    CSS3(SCSS)
                    <Icon icon="mdi:sass" />
                  </span>
                  <span>
                    JAVASCRIPT
                    <Icon icon="bxl:javascript" />
                  </span>
                  <span>
                    REACT JS
                    <Icon icon="mingcute:react-line" />
                  </span>
                  <span>
                    REDUX
                    <Icon icon="fontisto:redux" />
                  </span>
                  <span>
                    NETLIFY
                    <Icon icon="bxl:netlify" />
                  </span>
                </span>
              </div>
              <div className="project-footer">
                <Link className="project-external-link">
                  Pencredit
                  <Icon icon="lucide:external-link" />
                </Link>
                <Link className="project-source-link">
                  sourcecode <Icon icon="mdi:github" />
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="more-project">
        <button >
              Browse more projects
        </button>
        </div>
      </div>
    </div>
  );
};
