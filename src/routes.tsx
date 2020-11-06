import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/map" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
