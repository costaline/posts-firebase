import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  state = {
    errror: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return <h2>Something went wrong</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
