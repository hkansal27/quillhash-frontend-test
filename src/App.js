import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Favorite from './pages/Favourite'
import Error from './pages/Error'

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/favorite' component={Favorite} />
        <Route path='/' component={Error} />
      </Switch>
    </>
  );
}

export default App;
