/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Artists from '../../containers/Artists';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/artists' component={Artists} />
      </Switch>
    </Router>
  );
}

export default App;
