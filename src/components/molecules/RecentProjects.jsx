import styled from 'styled-components';
import { ProjectCard } from '../atoms/ProjectCard';

import data from '../../data/pages.json';

const RecentProjects = (theme) => {

  return (
    <LocalContainer>
      {data.projects.slice(0, 3).map((project, index) => (
        <ProjectCard
          theme={theme}
          key={index}
          name={project.name}
          demo={project.demo}
          repo={project.repo}
          shortDescription={project.shortDescription}
          screenshot={project.screenshots[0]}
        />
      ))}
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`

export { RecentProjects };
