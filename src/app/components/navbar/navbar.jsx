import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

          {!user && (
            <li>
              <NavLink to="/auth">AUTH</NavLink>
            </li>
          )}
        </ul>

        {user && (
          <ul>
            <li>
              <NavLink to="/new-post">NEW POST</NavLink>
            </li>
            <li>{user.email}</li>
            <li onClick={logoutUser}>LOGOUT</li>
          </ul>
        )}
      </nav>
    </header>
  );
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
