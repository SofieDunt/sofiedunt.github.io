import React from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import {Sections, Links} from "./content";
import Project from "./components/project";
import Logo from "./content/logo.png";
import SFTTSite from "./content/SFTTSite.png";

function App() {
  return (
    <div className={"app"} id={Sections.ME}>
      <NavBar />
      <Banner />
      
      <div className={"body"}>
        <h1 className={"title"} id={Sections.PROJECTS}>Projects</h1>
        <div className={"flex-section"}>
          <Project
              title={"this site"}
              body={<p>a site designed in Figma and created with React to keep track of my latest experiences</p>}
              date={'November 2021'}
              image={Logo}
          />
          <Project
              title={"Adopt-A-Tree"}
              body={
                <p>
                  a web application to connect residents to their local trees and help
                  <a href={Links.SFTT} target={"_blank"} rel={"noreferrer"}>@SpeakForTheTrees</a>
                  expand Boston's urban forest
                </p>}
              date={'Aug 2020-Present'}
              link={Links.SFTT_SITE}
              image={SFTTSite}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
