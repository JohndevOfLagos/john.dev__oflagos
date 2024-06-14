import React from "react";
import "./Home.scss";
import { Header } from "../../Components/Header/Header";
import { SidebarNavigation } from "../../Components/SidebarNavigation/SidebarNavigation";
import { LandingPage } from "../LandingPage/LandingPage";
import { About } from "../About/About";
import { Services } from "../Services/Services";
import { Projects } from "../Projects/Projects"
import { WhatTheySayAboutMe } from "../WhatTheySayAboutMe/WhatTheySayAboutMe";
import { Skills } from "../Skills/Skills";
import { Timeline } from "../Timeline/Timeline";
import { FAQ } from "../../Components/Help/FAQ";
import { Footer } from "../../Components/Footer/Footer";
import { useState } from "react";

export const Home = () => {
  const [isSidebarOpen, setOpenSiderbar] = useState(false);

  const opensiderbar =()=> {
   setOpenSiderbar(true)
  }
  const closesidebar =()=> {
   setOpenSiderbar(false)
  }

  return (
    <div className="home">
      <nav className="homeSidebar">
        <SidebarNavigation isOpen={isSidebarOpen} Onclose={closesidebar}/>
      </nav>
      <Header  onpenSidebar={opensiderbar}/>
      <div className="Main-home-section">
        <LandingPage />
        <About />
        <Services/>
        <Projects/>
        <WhatTheySayAboutMe/>
        <Skills/>
        <Timeline/>
        <FAQ/>
        <Footer/>
      </div>
    </div>
  );
};
