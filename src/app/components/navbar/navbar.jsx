import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { authActions } from "~store/actions";

const NavBar = ({ user, logoutUser, history }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/posts">POSTS</NavLink>
          </li>

          {user && (
            <li>
              <NavLink to="/new-post">NEW POST</NavLink>
            </li>
          )}
        </ul>

        <ul>
          {user ? (
            <>
              <li>{user.email}</li>
              <li onClick={() => logoutUser(history)}>LOGOUT</li>
            </>
          ) : (
            <li>
              <NavLink to="/auth">AUTH</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }),
  logoutUser: PropTypes.func.isRequired,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
