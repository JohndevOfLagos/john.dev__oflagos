import React from "react";
import "./Services.scss";

import { Icon } from "@iconify/react";

export const Services = () => {
  return (
    <div className="Services">
      <div className="inner-services">
        <div className="services-head">
          <span>
            Services
            <span>.</span>
          </span>
        </div>
        <ul className="service-card-list">
          <article className="service-card">
            <Icon icon="mdi:code" />
            <h4>Web Development</h4>
            <div className="underline"></div>
            <p>
            "I provide professional web development services, creating responsive, user-friendly websites to enhance your online presence and drive digital success."
            </p>
          </article>
          <article className="service-card">
            <Icon icon="simple-icons:sketch" />
            <h4>Web Design</h4>
            <div className="underline"></div>
            <p>
            "Crafting captivating websites tailored to your vision. Elevate your online presence with sleek designs that engage and inspire. Let's bring your ideas to life!"
            </p>
          </article>
          <article className="service-card">
            <Icon icon="cib:android" />
            <h4>Apps</h4>
            <div className="underline"></div>
            <p>
            "I deliver top-notch app solutions, crafting intuitive, high-performance mobile applications that resonate with users and drive business growth effectively."
            </p>
          </article>
        </ul>
      </div>
    </div>
  );
};
