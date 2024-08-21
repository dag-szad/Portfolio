import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme.js';

import { ToggleThemeButton } from './styles/Button.styled.jsx';
import { Header } from './components/molecules/Header.jsx';

import moonIcon from './assets/moon.svg';
import sunIcon from './assets/sun.svg';
import { Banner } from './components/molecules/Banner.jsx';
import { RecentProjects } from './components/molecules/RecentProjects.jsx';

const App = () => {
  const [theme, setTheme] = useState('light');

  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header theme={theme} />
        <Banner theme={theme} />
        <RecentProjects />
        <ToggleThemeButton onClick={toggleTheme}>
          {isDarkTheme ? (
            <img src={sunIcon} alt="Light theme icon" />
          ) : (
            <img src={moonIcon} alt="Dark theme icon" />
          )}
        </ToggleThemeButton>
      </>
    </ThemeProvider>
  );
};

export default App;
