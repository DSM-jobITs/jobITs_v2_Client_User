import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Employment from './components/employment/Employment';
import EmploymentDetailView from './components/employment/employmentDetailView/EmploymentDetailView';
import NotFound from './components/notFound/NotFound';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/employment' component={Employment} />
        <Route path='/hello' component={EmploymentDetailView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routing;