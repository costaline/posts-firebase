import React from "react";

import Quote from "~components/quote";
import ErrorBoundary from "~hocs/error-boundary";

const HomePage = () => {
  return (
    <ErrorBoundary>
      <section>
        <Quote refreshTimeoutSec={60} />
      </section>
    </ErrorBoundary>
  );
};

export default HomePage;
