import React from "react";
import { Icon } from "@iconify/react";

export const HeroBottom = () => {
  return (
    <div className="herobottom">
      <div className="box">
        <span></span>
        <span></span>
      </div>
        <div className="herobottom-body">
          <div className="herobottom-left">
            <span>
              <h4>{""}</h4>
              <span></span>
            </span>
            <h4>Some of the newest <span>techology</span> that i use.</h4>
          </div>
          <div className="herobuttom-right">
          <Icon icon="vscode-icons:file-type-html" />
          <Icon icon="vscode-icons:file-type-css" />
          <Icon icon="tabler:brand-javascript" />
          <Icon icon="vscode-icons:file-type-js-official" />
          <Icon icon="skill-icons:redux" />
          <Icon icon="cib:redux" />
          <Icon icon="vscode-icons:file-type-light-netlify" />
          <Icon icon="vscode-icons:file-type-firebase" />
          <Icon icon="cib:github" />
          </div>
        </div>
    </div>
  );
};
