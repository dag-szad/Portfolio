import { Link } from 'react-router-dom';
import styled from 'styled-components';

import starIconLight from '../../assets/star_small_light.svg';
import starIconDark from '../../assets/star_small_dark.svg';

const colors = {
  light: '#272424',
  dark: '#F9F3DE',
};

const Header = ({ theme }) => {
  const starType = theme === 'light' ? starIconDark : starIconLight;

  return (
    <Nav>
      <List theme={theme}>
        <ListItem>
          <Link to="/about">about me</Link>
        </ListItem>
        <ListItem>
          <img src={starType} alt="" role="presentation" />
        </ListItem>
        <ListItem>
          <Link to="/portfolio">portfolio</Link>
        </ListItem>
        <ListItem isHighlighted>
          <Link to="/">dag-szad</Link>
        </ListItem>
        <ListItem>
          <Link to="/resume">resume</Link>
        </ListItem>
        <ListItem>
          <img src={starType} alt="" role="presentation" />
        </ListItem>
        <ListItem>
          <Link to="/contact">contact</Link>
        </ListItem>
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  list-style: none;

  padding: 15px 75px;
  margin: 0;

  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.light : colors.dark)};
`;

const ListItem = styled.li`
  letter-spacing: 0.2rem;

  ${({ isHighlighted }) =>
    isHighlighted
      ? `
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0 30px;
    `
      : `
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  `}
`;

export { Header };
