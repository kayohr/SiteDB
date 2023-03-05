import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PagInicial from './pages/PagInicial';
import FilterEmpresa from './pages/FilterEmpresa';
import Boleto from './pages/Boleto';





function App() {
  return (
    <Switch>
      <Route exact path="/" component={ PagInicial } />
      <Route exact path="/filter" component={ FilterEmpresa } />
      <Route exact path="/boleto" component={ Boleto } />

    </Switch>
  );
}

export default App;
