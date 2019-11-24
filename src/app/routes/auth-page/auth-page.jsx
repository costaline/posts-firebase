import React, { Component } from "react";
import { connect } from "react-redux";

import { authActions } from "~store/actions";

class AuthPage extends Component {
  state = {
    email: "",
    password: ""
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

          <button type="submit">LOGIN</button>
          <button onClick={this.authSignUp} type="button">
            REG
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { firebaseSignUp: authActions.authSignUp })(
  AuthPage
);
