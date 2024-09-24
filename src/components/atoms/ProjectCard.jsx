import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { MainButton } from '../../styles/Button.styled';

const ProjectCard = ({
  theme,
  name,
  demo,
  repo,
  shortDescription,
  screenshot,
}) => {
  return (
    <LocalContainer>
      <ProjectImage src={screenshot} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        <MainButton theme={theme}>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            demo
          </a>
        </MainButton>
        <MainButton theme={theme}>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            repository
          </a>
        </MainButton>
      </div>
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  width: 80%;
`;

const ProjectImage = styled.img`
  max-width: 40vw;
`;

export { ProjectCard };
