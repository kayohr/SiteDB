import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PagInicial from './pages/PagInicial';
import FilterEmpresa from './pages/FilterEmpresa';




function App() {
  return (
    <Switch>
      <Route exact path="/" component={ PagInicial } />
      <Route exact path="/filter" component={ FilterEmpresa } />
    </Switch>
  );
}

export default App;
