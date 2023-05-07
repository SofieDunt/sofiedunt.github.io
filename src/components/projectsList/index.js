import React, { useEffect, useMemo, useState } from 'react';
import Project from '../project';
import SearchInput from '../searchInput';
import './projectsList.css';

/*
props:
- projects: Project[]
*/
function ProjectsList(props) {
  const { projects } = props;
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
    setSortedProjs(renderedProjs.filter((proj) => {
      return proj.title.includes(query)
        || proj.description.includes(query)
        || proj.date.includes(query)
        || proj.badges.includes(query);
    }));
  };

  const onSearch = (query) => {
    sortProjects(query);
  };

  return (
    <div>
      <SearchInput
        id={'search-projects'}
        placeholder={'Search by title, description, date, or language, ex. "research", "python"'}
        onSearch={onSearch}
      />
      <div className={'card-section'}>
        {sortedProjs.map((project) => project.elem)}
      </div>
    </div>
  );
}

export default ProjectsList;
