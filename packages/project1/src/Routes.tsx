import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
