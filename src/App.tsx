import React from 'react';
import {hot} from 'react-hot-loader';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default hot(module)(App);