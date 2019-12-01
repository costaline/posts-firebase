import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.scss";

import NavBar from "~components/navbar";
import Layout from "~components/layout";

const App = () => {
  return (
    <>
      <NavBar />
      <Layout />
    </>
  );
};

export default App;
