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
        <ButtonContainer>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <MainButton theme={theme}>demo</MainButton>
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <MainButton theme={theme}>repository</MainButton>
          </a>
        </ButtonContainer>
      </div>
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;

const ProjectImage = styled.img`
  max-width: 40vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export { ProjectCard };
