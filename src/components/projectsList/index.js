import React, { useEffect, useMemo, useState } from 'react';
import Project from '../project';
import SearchInput from '../searchInput';
import './projectsList.css';

/*
props:
- projects: Project[]
*/
const ProjectsList = ({ projects }) => {
  const [sortedProjs, setSortedProjs] = useState([]);

  const mapProjectList = (projectList) => {
    return projectList.map((project, idx) => {
        const elem = project.customElement ?
          <React.Fragment key={idx}>{project.customElement}</React.Fragment> :
          <Project
            key={idx}
            title={project.title}
            titleBody={project.titleBody}
            description={project.description}
            date={project.date}
            link={project.link}
            image={project.image}
            badges={project.badges}
          />;

        const sortableDetails = {
          title: project.title.toLowerCase(),
          description: project.description.text.toLowerCase(),
          date: project.date.toLowerCase(),
          badges: project.badges.map((badge) => badge.title.toLowerCase()),
        };

        return {
          ...sortableDetails,
          elem: elem,
        };
      },
    );
  };

  const renderedProjs = useMemo(() => {
    return mapProjectList(projects);
  }, [projects]);

  useEffect(() => {
    setSortedProjs(renderedProjs);
  }, [renderedProjs]);

  const sortProjects = (query) => {
    const queryTerms = query.split(',');
    setSortedProjs(renderedProjs.filter((proj) => {
      for (const term of queryTerms) {
        if (proj.title.includes(term)
          || proj.description.includes(term)
          || proj.date.includes(term)
          || proj.badges.includes(term)) {
          return true;
        }
      }

      return false;
    }));
  };

  const onSearch = (query) => {
    sortProjects(query);
  };

  return (
    <div>
      <SearchInput
        id={'search-projects'}
        placeholder={'Search by title, description, date, or language, ex. "application", "python", "java,react"'}
        onSearch={onSearch}
      />
      <div className={'card-section'}>
        {sortedProjs.map((project) => project.elem)}
      </div>
    </div>
  );
};

export default ProjectsList;
