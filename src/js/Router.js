import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

export default class Router extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact key={1}
            path={"/"}
            component={ Home } />
        </Switch>
      </HashRouter>
    )
  }
}
