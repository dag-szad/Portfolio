import styled from 'styled-components';

const colors = {
  light: '#272424',
  dark: '#F9F3DE',
  lightTransparent: '#2724241A',
  darkTransparent: '#F9F3DE1A',
};

const ToggleThemeButton = styled.button`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;

const MainButton = styled.button`
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

export { ToggleThemeButton, MainButton };
