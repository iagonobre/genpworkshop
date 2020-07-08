import { Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';
import Emails from './pages/Emails'
import Inscrito from './pages/Inscrito'

import history from './services/history'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/inscricao" component={Inscrito} />
        <Route path="/mongodbemails" exact component={Emails} />
      </Switch>
    </Router>
  );
}
