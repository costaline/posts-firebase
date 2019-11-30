import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import PropTypes from "prop-types";

const WithBootstrapNavbar = ({
  children,
  color = "light",
  mode = "light",
  expand
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      dark={mode === "dark" ? true : false}
      light={mode === "light" ? true : false}
      color={color}
      expand={expand}
    >
      <NavbarBrand>PFB</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {children}
      </Collapse>
    </Navbar>
  );
};

WithBootstrapNavbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  color: PropTypes.string,
  mode: PropTypes.string,
  expand: PropTypes.string
};

export default WithBootstrapNavbar;
