import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { authActions } from "~store/actions";
import Loader from "~components/loader";
import AuthForm from "~components/auth-form";
import { validateControl, validateForm } from "~src/app/utils/validate-form.js";

const initialState = () => ({
  email: { value: "" },
  password: { value: "" }
});

class AuthPage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string
    }),
    requesting: PropTypes.bool.isRequired,
    error: PropTypes.string,
    history: PropTypes.object,
    firebaseSignIn: PropTypes.func,
    firebaseSignUp: PropTypes.func
  };

  state = initialState();

  componentDidMount() {
    if (this.props.user) {
      this.replacePage();
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.replacePage();
    }
  }

  replacePage = () => {
    this.props.history.replace("/");
  };

  onChangeHandler = (evt) => {
    //получаем проверяемый контрол
    const control = evt.target.name;
    //получаем данные контрола
    const controlValues = { ...this.state[control] };
    //записываем данные из формы
    controlValues.value = evt.target.value;
    //данные с учетом валидации
    const validated = validateControl(controlValues, control);
    //записываем в state
    this.setState({ [evt.target.name]: { ...validated } });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();
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
    const formControls = { ...this.state };

    const { controlsWithShowErrors: formData, isFormValid } = validateForm(
      formControls
    );

    this.setState({ ...formData });

    if (isFormValid) {
      this.authSignIn();
    }
  };

  onRegClickHandler = () => {
    const formControls = { ...this.state };

    const { controlsWithShowErrors: formData, isFormValid } = validateForm(
      formControls
    );

    this.setState({ ...formData });

    if (isFormValid) {
      this.authSignUp();
    }
  };

  //TODO: modal
  showAuthError = () => {
    return <h3>{this.props.error}</h3>;
  };

  render() {
    const { requesting, error } = this.props;
    const { email, password } = this.state;

    return (
      <>
        {requesting && !error && <Loader />}
        {error && this.showAuthError()}

        {!requesting && !error && (
          <AuthForm
            onSubmitHandler={this.onSubmitHandler}
            onLogin={this.onLoginClickHandler}
            onReg={this.onRegClickHandler}
            onChangeHandler={this.onChangeHandler}
            controlEmail={email}
            controlPassword={password}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    requesting: state.authReducer.requesting,
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps, {
  firebaseSignUp: authActions.authSignUp,
  firebaseSignIn: authActions.authSignIn
})(AuthPage);
