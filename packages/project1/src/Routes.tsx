import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
