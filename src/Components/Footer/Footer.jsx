import React from "react";
import "./Footer.scss";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner-footer">
        <div className="footer-list">
          <article className="footer-item">
            <h4>John Adewunmi</h4>
            <p>
              Are you an agency or a freelancer? I always welcome new
              opportunities to exchange ideas and to explore collaborations
              <Link>
                <Icon icon="mynaui:arrow-long-right" />
                Drop me a line
              </Link>
            </p>
            <div className="social-media">
              <ul className="social-media-list">
                <li className="icon-content">
                  <Link
                    data-social="github"
                    aria-label="Github"
                    href="https://www.github.com/"
                  >
                    <div className="filled"></div>
                    <Icon icon="mdi:github" />
                  </Link>
                  <div className="tooltip">Github</div>
                </li>
                <li className="icon-content">
                  <Link
                    data-social="instagram"
                    aria-label="Instagram"
                    href="https://www.instagram.com/"
                  >
                    <div className="filled"></div>
                    <Icon icon="mdi:instagram" />
                  </Link>
                  <div className="tooltip">Instagram</div>
                </li>
                <li className="icon-content">
                  <Link
                    data-social="twitter"
                    aria-label="Twitter"
                    href="https://www.twitter.com/"
                  >
                    <div className="filled"></div>
                    <Icon icon="mdi:twitter" />
                  </Link>
                  <div className="tooltip">Twitter</div>
                </li>
                <li className="icon-content">
                  <Link
                    data-social="linkedin"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/"
                  >
                    <div className="filled"></div>
                    <Icon icon="mdi:linkedin" />
                  </Link>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <Link
                    data-social="facebook"
                    aria-label="Facebook"
                    href="https://www.facebook.com/"
                  >
                    <div className="filled"></div>
                    <Icon icon="fe:facebook" />
                  </Link>
                  <div className="tooltip">Facebook</div>
                </li>
              </ul>
            </div>
          </article>
          <article className="footer-item2">
            <div className="footer-links">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Process</Link>
              <Link>Projects</Link>
              <Link>Contact</Link>
            </div>
            <div className="footer-contact">
              <div className="footer-contact-card">
                <Icon icon="clarity:email-line" />
                <h4>Email</h4>
                <span>johnayomideadewunmi@gmail.com</span>
              </div>
              <div className="footer-contact-card">
                <Icon icon="mage:phone" />
                <h4>Phone</h4>
                <span>+2347069576391</span>
              </div>
            </div>
            <span className="copyright">
              Copyright © 2022 John A. Adewunmi - All Rights reserved •
              johnayomideadewunmi@gmail.com
            </span>
          </article>
        </div>
      </div>
    </div>
  );
};
