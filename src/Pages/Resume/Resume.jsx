import React from "react";
import "./Resume.scss";


import { Icon } from "@iconify/react";



export const Resume = () => {


  return (
    <div className="Resume">
      <div className="inner-resumes">
        <div className="resume-head">
          <span>
            Resumes
            <span>.</span>
          </span>
        </div>
        <div className="resumes-content">
          <div className="resumes-content-body">
            <div className="resume-pdf">
            <Icon icon="bxs:file-pdf" />
              <div>
              <span> John-Adewunmi-CV.pdf</span>
              <p>Added 24 Oct 2023</p>
              </div>
            </div>

            <div className="resumes-btn">
              <button class="button" type="button">
                <span class="button__text">Download</span>
                <span class="button__icon">
                  <Icon icon="material-symbols:download" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
