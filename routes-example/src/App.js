import React, { Component } from 'react';
import Routes from './routes';
import Main from './pages/main/index';
import Header from './components/Header';

import './styles.css';

const App = () => (
  <div className='App'>
    <Header />
    <Routes />
  </div>
)

export default App;
