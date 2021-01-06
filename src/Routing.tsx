import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Password from './components/password/Password';
import Employment from './components/employment/Employment';
import EmploymentDetailView from './components/employment/employmentDetailView/EmploymentDetailView';
import NotFound from './components/notFound/NotFound';
import Warning from './components/warning/Warning';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/password' component={Password} />
        <Route path='/employment' component={Employment} />
        <Route path='/hello' component={EmploymentDetailView} />
        <Route path='/warning' component={Warning} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routing;