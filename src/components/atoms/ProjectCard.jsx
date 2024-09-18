import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  light: '#272424',
  dark: '#F9F3DE',
  lightTransparent: '#2724241A',
  darkTransparent: '#F9F3DE1A',
};

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
        <LocalButton theme={theme}>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </LocalButton>
        <LocalButton theme={theme}>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </LocalButton>
      </div>
    </LocalContainer>
  );
};

const LocalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ProjectImage = styled.img`
  max-width: 45%;
  flex-grow: 1;
`;

const LocalButton = styled.button`
  background: none;
  outline: none;
  padding: 10px 35px;

  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.light : colors.dark)};
  border-radius: 5px;

  color: ${({ theme }) => (theme === 'light' ? colors.light : colors.dark)};
  transition: background-color 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? colors.lightTransparent : colors.darkTransparent};
  }
`;

export { ProjectCard };
