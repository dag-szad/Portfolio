import { Link } from 'react-router-dom';
import data from '../../data/pages.json';

import styled from 'styled-components';
import { ProjectCard } from '../atoms/ProjectCard';
import { MainButton } from '../../styles/Button.styled';

const RecentProjects = ({ theme }) => {
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
      <MainButton theme={theme}>
        <Link to="/portfolio">portfolio</Link>
      </MainButton>
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin: 50px auto;
`;

export { RecentProjects };
