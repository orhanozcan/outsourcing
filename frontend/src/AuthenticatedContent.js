import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './app-routes-main';


export default function () {
  return (


    <Switch>
      {routes.map(({ path, component }) => (
        <Route
          exact
          key={path}
          path={path}
          component={component}
          replace
        />
      ))}
      <Redirect to={'/main'} />
    </Switch>


  );
}
