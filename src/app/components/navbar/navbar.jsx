import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { authActions } from "~store/actions";

const NavBar = ({ user, logoutUser }) => {
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
              <li onClick={logoutUser}>LOGOUT</li>
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
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser: authActions.logoutUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
