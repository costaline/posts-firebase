import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import routes from "~routes";
import ErrorBoundary from "~hocs/error-boundary";

const Layout = ({ user }) => {
  const renderRoutes = routes(!!user);

  return (
    <main className="container">
      <section className="row pt-4">
        <ErrorBoundary>
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
        </ErrorBoundary>
      </section>
    </main>
  );
};

Layout.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Layout);
