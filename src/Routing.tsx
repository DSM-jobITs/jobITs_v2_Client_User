import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main/Main';
import NotFound from './components/notFound/NotFound';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routing;