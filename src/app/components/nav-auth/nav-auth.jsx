import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as R from "ramda";

import { authActions } from "~store/actions";
import WithBootstrapNavitem from "~hocs/with-bootstrap-navitem";

const NavAuth = ({ user, logoutUser, history }) => {
  const logout = () => {
    logoutUser(history);
  };

  return (
    <ul className="navbar-nav ">
      {user ? (
        <>
          <WithBootstrapNavitem nav={false}>{user.email}</WithBootstrapNavitem>

          <WithBootstrapNavitem onClickHandler={logout} nav={false} pointer>
            LOGOUT
          </WithBootstrapNavitem>
        </>
      ) : (
        <WithBootstrapNavitem path="/auth">AUTH</WithBootstrapNavitem>
      )}
    </ul>
  );
};

NavAuth.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  logoutUser: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser: authActions.logoutUser }, dispatch);
};

export default R.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavAuth);
