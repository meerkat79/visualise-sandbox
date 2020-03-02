import React from 'react';
import './App.css';

import Dashboard from './views/dashboard/dashboard';
import Footer from './global/footer/footer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="app">
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
