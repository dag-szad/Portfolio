import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectCard } from '../atoms/ProjectCard';

import data from '../../data/pages.json';

const RecentProjects = () => {
  return (
    <div>
      {data.projects.slice(0, 3).map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          demo={project.demo}
          repo={project.repo}
          shortDescription={project.shortDescription}
          screenshot={project.screenshots[0]}
        />
      ))}
    </div>
  );
};

export { RecentProjects };
