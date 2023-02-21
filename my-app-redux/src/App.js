import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Galeria from './pages/Galeria';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/galeria" component={ Galeria } />

    </Switch>
  );
}

export default App;
