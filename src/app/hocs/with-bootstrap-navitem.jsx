import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const WithBootstrapNavitem = (props) => {
  const {
    children,
    exact = false,
    path,
    nav = true,
    onClickHandler = null,
    pointer = false
  } = props;

  return (
    <li onClick={onClickHandler} className="nav-item mx-1">
      {nav ? (
        <NavLink className="nav-link" exact={exact} to={path}>
          {children}
        </NavLink>
      ) : (
        <span
          className="nav-link"
          style={pointer ? { cursor: "pointer" } : { cursor: "default" }}
        >
          {children}
        </span>
      )}
    </li>
  );
};

WithBootstrapNavitem.propTypes = {
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string,
  nav: PropTypes.bool,
  onClickHandler: PropTypes.func,
  pointer: PropTypes.bool
};

export default WithBootstrapNavitem;
