import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import WithBootstrapNavitem from "~hocs/with-bootstrap-navitem";

const NavSite = ({ user }) => (
  <ul className="navbar-nav mr-auto">
    <WithBootstrapNavitem path="/" exact>
      HOME
    </WithBootstrapNavitem>

    <WithBootstrapNavitem path="/posts">POSTS</WithBootstrapNavitem>

    {!!user && (
      <WithBootstrapNavitem path="/new-post">NEW POST</WithBootstrapNavitem>
    )}
  </ul>
);

NavSite.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(NavSite);
