import React from "react";

import WithBootstrapNavbar from "~hocs/with-bootstrap-navbar";
import NavSite from "~components/nav-site";
import NavAuth from "~components/nav-auth";

const NavBar = () => {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <WithBootstrapNavbar color="primary" mode="dark" expand="md">
        <NavSite />
        <NavAuth />
      </WithBootstrapNavbar>
    </header>
  );
};

export default NavBar;
