import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route path="/carteira" component={  } /> */}

    </Switch>
  );
}

export default App;
