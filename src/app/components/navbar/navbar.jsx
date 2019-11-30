import React from "react";

import WithBootstrapNavbar from "~hocs/with-bootstrap-navbar";
import NavSite from "~components/nav-site";
import NavAuth from "~components/nav-auth";

const NavBar = () => {
  return (
    <header>
      <WithBootstrapNavbar color="primary" mode="dark" expand="md">
        <NavSite />
        <NavAuth />
      </WithBootstrapNavbar>
    </header>
  );
};

export default NavBar;
