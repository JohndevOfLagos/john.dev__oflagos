import React from "react";
import "./Services.scss";

import SoftwareImage from "../../Assets/image/Image2/me-laptop-developing-web.jpg"
import WebDesignImage from "../../Assets/image/Image2/brand-identity-sketches-and-laptop.jpg"
import ConsultationImage from "../../Assets/image/Image2/strategy-client-meeting.jpg"
import TeamLeadImage from "../../Assets/image/Image2/wirframing-hand-moving-pins-web-design.jpg"

import { Icon } from "@iconify/react";

export const Services = () => {
  return (
    <div className="Services">
      <div className="inner-services">
        <div className="services-head">
          <span>
            How Can I Help You
            <span>.</span>
          </span>
        </div>
        <ul className="service-card-list">
        <article className="service-card">
            <img src={ConsultationImage} alt="" />
            <div className="service-card-body">
            <h4>Consultation<Icon icon="heroicons-outline:chat-alt" /></h4>
            <p>
            Startups often struggle to find software engineers. Initially, few are needed, but more are required as they grow.
            </p>
            </div>
          </article>
          <article className="service-card">
            <img src={TeamLeadImage} alt="" />
            <div className="service-card-body">
            <h4>Team Lead<Icon icon="material-symbols:social-leaderboard-outline-rounded" /></h4>
            <p>
            A team leader directs and instructs a workgroup to ensure effective operation. I possess the necessary qualities.
            </p>
            </div>
          </article>
          
          <article className="service-card">
            <img src={SoftwareImage} alt="" />
            <div className="service-card-body">  
            <h4>Software Development<Icon icon="grommet-icons:technology" /></h4>
            <p>
            Software development involves designing, programming, testing, and maintaining applications, frameworks, or software components.
            </p>
            </div>
          </article>
          <article className="service-card">
            <img src={WebDesignImage} alt="" />
            <div className="service-card-body">
            <h4>Web Design<Icon icon="simple-icons:sketch" /></h4>
            <p>
            Web design creates a website's overall look and feel by planning and building its elements, beyond logos and pictures.
            </p>
            </div>
          </article>  
        </ul>
      </div>
    </div>
  );
};
