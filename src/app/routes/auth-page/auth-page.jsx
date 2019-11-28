import React, { Component } from "react";
import { connect } from "react-redux";

import { authActions } from "~store/actions";

const initialState = () => ({
  email: {
    value: "",
    isValid: false,
    showError: false,
    errors: {
      empty: true,
      email: true
    }
  },
  password: {
    value: "",
    isValid: false,
    showError: false,
    errors: {
      empty: true,
      minLength: true
    }
  }
});

class AuthPage extends Component {
  state = initialState();

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
    const controlName = evt.target.name;
    const controlValues = { ...this.state[evt.target.name] };
    controlValues.value = evt.target.value;

    const values = this.validateControl(controlName, controlValues);

    values.showError = false;

    this.setState({
      [evt.target.name]: values
    });
  };

  //TODO split
  validateControl = (controlName, controlValues) => {
    // eslint-disable-next-line no-case-declarations, no-useless-escape
    const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const PASS_MIN_LENGTH = 6;

    let isValid = true;

    const { errors, value } = controlValues;

    errors.empty = value.trim() === "" ? true : false;

    isValid = !errors.empty && isValid;

    switch (controlName) {
      case "email":
        errors.email = !REGEX_EMAIL.test(value) ? true : false;

        isValid = !errors.email && isValid;
        break;

      case "password":
        errors.minLength = value.length < PASS_MIN_LENGTH ? true : false;

        isValid = !errors.minLength && isValid;
        break;
    }

    controlValues.isValid = isValid;

    return controlValues;
  };

  showFormError = () => {
    Object.keys(this.state).forEach((control) => {
      let controlValues = { ...this.state[control] };

      if (!this.state[control].isValid) {
        controlValues.showError = true;
        this.setState({ [control]: controlValues });
      }
    });
  };

  validateForm = () => {
    let isFormValid = true;

    Object.keys(this.state).forEach(
      (control) => (isFormValid = this.state[control].isValid && isFormValid)
    );

    if (!isFormValid) {
      this.showFormError();
    }

    return isFormValid;
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();

    this.setState(initialState);
  };

  //TODO optimize
  authSignUp = () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value,
      returnSequreToken: true
    };

    this.props.firebaseSignUp(authData);

    this.setState(initialState);
  };

  authSignIn = () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value,
      returnSequreToken: true
    };

    this.props.firebaseSignIn(authData);

    this.setState(initialState);
  };

  onLoginClickHandler = () => {
    const isFormValid = this.validateForm();

    if (isFormValid) {
      this.authSignIn();
    }
  };

  onRegClickHandler = () => {
    const isFormValid = this.validateForm();

    if (isFormValid) {
      this.authSignUp();
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="auth-email">Email</label>
            <input
              value={email.value}
              onChange={this.onChangeHandler}
              type="email"
              name="email"
              id="auth-email"
            />
            {email.showError && !email.isValid && (
              <div>
                <small>
                  {(email.errors.empty && "empty value") ||
                    (email.errors.email && "invalid email")}
                </small>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="auth-password">Password</label>
            <input
              value={password.value}
              onChange={this.onChangeHandler}
              type="password"
              name="password"
              id="auth-password"
            />
            {password.showError && !password.isValid && (
              <div>
                <small>
                  {(password.errors.empty && "empty value") ||
                    (password.errors.minLength &&
                      "at least 6 character required")}
                </small>
              </div>
            )}
          </div>

          <div>
            <button onClick={this.onLoginClickHandler} type="button">
              LOGIN
            </button>
            <button onClick={this.onRegClickHandler} type="button">
              REG
            </button>
          </div>
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
