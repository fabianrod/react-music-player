/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Artists from '../../containers/Artists';
import Albums from '../../containers/Albums';
import Songs from '../../containers/Songs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/artists' component={Artists} />
        <Route path='/albums/:id' component={Albums} />
        <Route path='/songs/:id' component={Songs} />
      </Switch>
    </Router>
  );
}

export default App;
