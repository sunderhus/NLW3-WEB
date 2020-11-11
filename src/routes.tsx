import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/map" component={OrphanagesMap} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
