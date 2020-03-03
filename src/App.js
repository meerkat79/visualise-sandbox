import React from 'react';
import './App.css';
import './main.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './views/dashboard/dashboard';
import Chart1 from './views/chart-1/chart1';
import Error from './views/error/error';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Home" exact component={Dashboard} />
            <Route path="/Chart1" component={Chart1} />
            <Route path="/Chart2" component={Error} />
            <Route path="/Chart3" component={Error} />
            <Route path="/error" component={Error} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
