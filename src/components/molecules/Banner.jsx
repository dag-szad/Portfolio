import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { MainButton } from '../../styles/Button.styled';

const colors = {
  light: '#272424',
  dark: '#F9F3DE',
  lightTransparent: '#2724241A',
  darkTransparent: '#F9F3DE1A',
};

const Banner = ({ theme }) => {
  return (
    <BannerContainer theme={theme}>
      <MainHeader>Hello, just call me Dag!</MainHeader>
      <LocalContainer>
        <SubHeader>
          I am motivated junior frontend developer with a passion for creating
          modern and functional web applications.
        </SubHeader>
        <Text>
          I'm seeking new professional challenges that will allow me to grow as
          a developer and contribute to innovative projects.
        </Text>
      </LocalContainer>
      <MainButton theme={theme}>
        <Link to="/about">about me</Link>
      </MainButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  max-width: 750px;
  margin: 0 auto;
  padding: 200px 55px 75px;

  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.light : colors.dark)};
`;

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const MainHeader = styled.h1`
  font-family: 'Metro', 'Tenor Sans', serif;
  font-size: 3.5rem;

  margin: 0;
`;

const SubHeader = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  max-width: 650px;
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  max-width: 550px;
  margin: 0;
`;

export { Banner };
