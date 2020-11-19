import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UsersStatistics from './pages/UsersStatistics';
import User from './pages/User';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users-statistics-table' component={UsersStatistics} />
        <Route exact path='/single-user-statistic/:id/:name' component={User} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
