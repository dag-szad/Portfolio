import { createGlobalStyle } from 'styled-components';
import noiseLight from './assets/noise_light.svg';
import noiseDark from './assets/noise_dark.svg';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    background-image: url(${({ theme }) => theme.backgroundImage});
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: '#F9F3DE',
  backgroundImage: noiseLight,
  text: '#272424',
};

export const darkTheme = {
  body: '#272424',
  backgroundImage: noiseDark,
  text: '#F9F3DE',
};
