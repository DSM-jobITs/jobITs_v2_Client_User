import React from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default hot(module)(App);