import { Link } from 'react-router-dom';
import data from '../../data/pages.json';

import styled from 'styled-components';
import { ProjectCard } from '../atoms/ProjectCard';
import { MainButton } from '../../styles/Button.styled';

const colors = {
  light: '#272424',
  dark: '#F9F3DE',
  lightTransparent: '#2724241A',
  darkTransparent: '#F9F3DE1A',
};

const RecentProjects = ({ theme }) => {
  return (
    <LocalContainer theme={theme}>
      <ProjectsContainer>
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
      </ProjectsContainer>
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

  max-width: 860px;
  margin: 0 auto;
  padding: 75px 0;

  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.light : colors.dark)};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export { RecentProjects };
