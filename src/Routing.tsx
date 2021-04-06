import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import PasswordContainer from './containers/PasswordContainer';
import Employment from './components/employment/Employment';
import EmploymentContainer from './containers/EmploymentContainer';
import EmploymentDetailView from './components/employment/employmentDetailView/EmploymentDetailView';
import NotFound from './components/notFound/NotFound';
import Warning from './components/warning/Warning';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/password' component={PasswordContainer} />
        <Route path='/recruit/:id' component={EmploymentDetailView}/>
        <Route path='/recruit' component={EmploymentContainer} />
        {/* <Route path='/warning' component={Warning} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routing;