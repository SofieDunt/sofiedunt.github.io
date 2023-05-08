import React from 'react';
import Banner from './components/banner';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ProjectsList from './components/projectsList';
import {
  ACTIVE_PROJECTS,
  COMPLETED_PROJECTS,
  Links,
  SectionIds,
} from './content';
import './App.css';

const App = () => {
  return (
    <div className={'app'}>
      <NavBar />
      <Banner />

      <div className={'body'}>
        {ACTIVE_PROJECTS.length > 0 &&
          <div className={'section'} id={SectionIds.COMPLETED_PROJECTS}>
            <h1>Right now, I'm working on...</h1>
            <ProjectsList projects={ACTIVE_PROJECTS} />
          </div>
        }

        {COMPLETED_PROJECTS.length > 0 &&
          <div className={'section'} id={SectionIds.COMPLETED_PROJECTS}>
            <h1>Some of my completed projects include...</h1>
            <ProjectsList projects={COMPLETED_PROJECTS} />
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
};

export default App;
