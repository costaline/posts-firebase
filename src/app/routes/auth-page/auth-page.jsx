import React, { Component } from "react";
import { connect } from "react-redux";

import { authActions } from "~store/actions";

class AuthPage extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this.replacePage();
  }

  componentDidUpdate() {
    this.replacePage();
  }

  replacePage = () => {
    if (this.props.user) {
      this.props.history.replace("/");
    }
  };

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();

    this.setState({ email: "", password: "" });
  };

  authSignUp = () => {
    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSequreToken: true
    };

    this.props.firebaseSignUp(authData);

    this.setState({ email: "", password: "" });
  };

  authSignIn = () => {
    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSequreToken: true
    };

    this.props.firebaseSignIn(authData);

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="auth-email">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChangeHandler}
            type="email"
            name="email"
            id="auth-email"
          />

          <label htmlFor="auth-password">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChangeHandler}
            type="password"
            name="password"
            id="auth-password"
          />

          <button onClick={this.authSignIn} type="button">
            LOGIN
          </button>
          <button onClick={this.authSignUp} type="button">
            REG
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, {
  firebaseSignUp: authActions.authSignUp,
  firebaseSignIn: authActions.authSignIn
})(AuthPage);
