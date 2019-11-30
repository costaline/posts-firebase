import React from "react";

import Quote from "~components/quote";

const HomePage = () => {
  return (
    <section>
      <Quote refreshTimeoutSec={60} />
    </section>
  );
};

export default HomePage;
