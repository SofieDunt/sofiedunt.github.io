import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import {SectionIds, Links, BUTTERFLIES} from "./content";
import Project from "./components/project";
import Logo from "./content/logo.png";
import SFTTSite from "./content/SFTTSite.png";
import Saga from "./content/saga.png";
import PlantCam from "./content/PlantCam.png";

function App() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className={"app"}>
      <NavBar />
      <Banner />

      <div className={"body"}>

        <div className={'section'} id={SectionIds.CURRENT_PROJECTS}>
          <h1>Right now, I'm working on...</h1>
          <div className={"flex-section card-section"}>
            <Project
              title={"Adopt A Tree Web App"}
              body={
                <p>
                  a web application to connect residents to their local trees and help {' '}
                  <a href={Links.SFTT} target={"_blank"} rel={"noreferrer"}>@SpeakForTheTrees</a>
                  {' '}expand Boston's urban forest.
                </p>}
              date={'Aug 2020-Present'}
              link={Links.SFTT_SITE}
              image={SFTTSite}
            />
            <Project
              title={"plantCam"}
              body={<p>improvements to an informative website that processes and displays real-time data about the state of endangered plants in Hawaii</p>}
              date={"Aug 2021-Present"}
              link={Links.PLANT_CAM}
              image={PlantCam}
            />
          </div>
        </div>

        <div className={'section'} id={SectionIds.COMPLETED_PROJECTS}>
          <h1>Some of my completed projects include...</h1>
          <div className={"flex-section card-section"}>
            <Project
                title={"this portfolio"}
                body={<p>a site designed in Figma and created with React to keep track of my latest experiences.</p>}
                date={'November 2021'}
                image={Logo}
            />
            <Project
                title={'Digital Equity Research'}
                body={<p>a literature review finding solutions to support older adults isolated by the COVID-19 pandemic and decrease the generational and socioeconomic gap in technology access and use</p>}
                date={"Mar 2021-Nov 2021"}
                image={Links.DE_RESEARCH_PHOTO}
                link={Links.LBFE}
            />
            <Project
                title={"Story Player & Writer"}
                body={<p>an application that allows users to play, create, and share interactive stories without any programming knowledge through the CL or a web interface</p>}
                date={"July 2021"}
                link={Links.SAGA}
                image={Saga}
            />
            <Project
                title={'Photo Editor'}
                body={<p>an application capable of importing images to, exporting images from, and modifying images in a user's photo library. written in Java and tested with JUnit.</p>}
                date={'June 2021'}
                image={BUTTERFLIES[activePhoto].img}
            >
              <p className={'small-text'}>Supported modifications include:</p>
              <div className={'flex-section'}>
                {BUTTERFLIES.map((butterfly, index) => {
                  return <button key={butterfly.name} className={"code-button"} onClick={() => setActivePhoto(index)}>{butterfly.name}</button>;
                })}
              </div>
              <p className={'small-text'}>...and more!</p>
            </Project>
          </div>
        </div>
      </div>

      <div className={"padded footnotes"} id={SectionIds.FOOTNOTES}>
        <p>Code that is not public <a href={Links.GITHUB}>on my GitHub</a> may be viewed upon <a href={Links.EMAIL}>request</a>. <a href={'https://icons8.com/'}>Github, Mail, Menu, and Close Icons by Icons8</a>.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
