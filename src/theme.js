import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import noiseLight from './assets/noise_light.svg';
import noiseDark from './assets/noise_dark.svg';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Metro';
    src: url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.eot') format('embedded-opentype');
    src: url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.eot') format('embedded-opentype'),
         url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.woff') format('woff'),
         url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.woff2') format('woff2'),
         url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.ttf') format('truetype'),
         url('/src/assets/fonts/MetroPhotograph-DemoVersion-Regular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'Nunito Sans', sans-serif;
  }

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
