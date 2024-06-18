import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Contact = () => {
  return (
    <div className="Contact">
      <header className="contact-section">
        <div className="container is-cnt-hero">
          <div className="div-hide">
            <div className="contact-page-tab-contain">
              <div className="left-contatti-tab">
                <h1>Contact me</h1>

                <div className="about-big-text-tab-contain">
                  <p>
                    <span className="span-text">Tell me about</span>
                    <span className="span-text cnt-page-2">your projects</span>
                  </p>
                </div>
              </div>

              <div className="right-contatti-tab">
                <div className="contact-page-form-content w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    action=""
                    method="POST"
                    className="contact-page-form"
                    aria-label="Email Form"
                  >
                    <div className="form-field-contain">
                      <input
                        type="text"
                        className="form-text-field w-input"
                        maxlength={256}
                        name="name"
                        data-name="Name"
                        placeholder="Name*"
                        id="Name"
                        required
                      />
                    </div>

                    <div className="form-field-contain">
                      <input
                        type="text"
                        className="form-text-field w-input"
                        maxlength={256}
                        name="company"
                        data-name="company"
                        placeholder="Company*"
                        id="company"
                        required
                      />
                    </div>

                    <div className="form-field-contain">
                      <input
                        type="email"
                        className="form-text-field w-input"
                        maxlength={256}
                        name="email"
                        data-name="email"
                        placeholder="Email*"
                        id="email"
                        required
                      />
                    </div>

                    <div className="form-field-contain">
                      <textarea
                        placeholder="Message*"
                        maxlength={256}
                        id="message"
                        name="message"
                        data-name="message"
                        required
                        className="form-text-field taller w-input"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value="SEND"
                      data-wait="Sending..."
                      className="form-button w-button"
                    />
                  </form>
                  {/* <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="getintouch-section">
        <span>
          <span>Get in touch -</span>
          <span>Get in touch -</span>
        </span>
      </div>
      <div className="getintouch-content-section">
        <ul className="getintouch-content-section-list">
          <li className="getintouch-content-section-item">
            <div className="left-top">
              <h1>Book a free video call with me</h1>
              <Link className="book-here" to="/Home/contact">
                <span>BOOK HERE</span>
                <Icon icon="mingcute:external-link-line" />
              </Link>
            </div>
            <div className="right-top">
              <h4>Follow me on social media for more content</h4>
              <div className="getintouch-content-section-social-meadia">
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
                      data-social="linkedin"
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/"
                    >
                      <div className="filled"></div>
                      <Icon icon="mdi:linkedin" />
                    </Link>
                    <div className="tooltip">LinkedIn</div>
                  </li>
                </ul>
            </div>
            </div>

          </li>
          <li className="getintouch-content-section-item"> 


            <div className="left-bottom">
               <h1>Don't go just yet, you can buy me a coffee or send me a
               donation; chat me up
               <span>
                  <Icon icon="streamline:smiley-happy" />
                  <Icon icon="openmoji:call-me-hand" />
                </span>
               </h1>
     
            </div>

            <div className="right-bottom">
              <h4>Do you just want to contact me?</h4>
              <div className="right-contact">
                <div className="contact-item">
                  <span>johnayomideadewunmi@gmail.com</span>
                  <button>Email</button>
                </div>
                <div className="contact-item">
                  <span>+2347069576391</span>
                  <button>Call</button>
                </div>
              </div>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
};
