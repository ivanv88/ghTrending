import React from 'react';
import './App.css';
import { Layout } from './features/gui/layout/layout'
import { ROUTES } from './app/routes'
import { ThemeProvider } from 'styled-components'

const theme = {
  dark: true
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout routes={ ROUTES }/>
    </ThemeProvider>
  );
}

export default App;
