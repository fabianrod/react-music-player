import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../containers/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
