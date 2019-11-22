import React, { Component } from "react";

import { firebaseAuthSignUp } from "~services/axios";

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

    console.log(evt.target);

    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSequreToken: true
    };

    firebaseAuthSignUp(authData);

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
          <button type="submit">REG</button>
        </form>
      </div>
    );
  }
}

export default AuthPage;
