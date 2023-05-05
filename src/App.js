import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Banner from './components/banner';
import Footer from './components/footer';
import { SectionIds, Links } from './content';
import { ACTIVE_PROJECTS, COMPLETED_PROJECTS } from './content/projects';
import Project from './components/project';

function App() {

  const mapProjectList = (projectList) => {
    return projectList.map((project) =>
      project.customElement ? project.customElement :
        <Project
          title={project.title}
          titleBody={project.titleBody}
          description={project.description}
          date={project.date}
          link={project.link}
          image={project.image}
          badges={project.badges}
        />,
    );
  };

  return (
    <div className={'app'}>
      <NavBar />
      <Banner />

      <div className={'body'}>
        {ACTIVE_PROJECTS.length > 0 &&
          <div className={'section'} id={SectionIds.CURRENT_PROJECTS}>
            <h1>Right now, I'm working on...</h1>
            {mapProjectList(ACTIVE_PROJECTS)}
          </div>
        }

        {COMPLETED_PROJECTS.length > 0 &&
          <div className={'section'}
               id={SectionIds.COMPLETED_PROJECTS}>
            <h1>Some of my completed projects include...</h1>
            <div className={'flex-section card-section'}>
              {mapProjectList(COMPLETED_PROJECTS)}
            </div>
          </div>
        }
      </div>

      <div className={'padded footnotes'} id={SectionIds.FOOTNOTES}>
        <p>
          Code that is not public <a href={Links.GITHUB}>on my GitHub</a> may be
          viewed upon <a href={Links.EMAIL}>request</a>.{' '}
          <a href={'https://icons8.com/'}>
            Github, Mail, Menu, and Close Icons by Icons8
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
