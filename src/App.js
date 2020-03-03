import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './views/dashboard/dashboard';
import Error from './views/error/error';

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
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/error" component={Error} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
