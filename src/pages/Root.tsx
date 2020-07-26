import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'components/index';
import routesMap from 'routes';

const Root: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {routesMap.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
