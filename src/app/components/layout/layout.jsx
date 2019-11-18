import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "~routes";

const Layout = () => {
  return (
    <main>
      <Switch>
        {routes.map((route, i) => (
          <Route key={`route-${i}`} {...route} />
        ))}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Layout;
