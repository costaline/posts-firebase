import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "~routes";

const Layout = ({ user }) => {
  const renderRoutes = routes(!!user);

  return (
    <main className="container">
      <Switch>
        {renderRoutes
          .filter((route) => route.isRender)
          .map(({ path, component, exact }) => {
            return (
              <Route
                key={`route:${path}`}
                path={path}
                component={component}
                exact={exact}
              />
            );
          })}

        <Redirect to="/" />
      </Switch>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Layout);
