import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const AuthForm = (props) => {
  const {
    onSubmitHandler,
    onChangeHandler,
    onLogin,
    onReg,
    controlEmail,
    controlPassword
  } = props;

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label hidden for="auth-email">
          Email
        </Label>
        <Input
          valid={false || (!!controlEmail.isValid && !controlEmail.showError)}
          invalid={false || (!controlEmail.isValid && !!controlEmail.showError)}
          type="email"
          name="email"
          id="auth-email"
          placeholder="email"
          value={controlEmail.value}
          onChange={onChangeHandler}
        />

        {controlEmail.showError && (
          <>
            {(controlEmail.errors.empty && (
              <FormFeedback>empty value</FormFeedback>
            )) ||
              (controlEmail.errors.email && (
                <FormFeedback>invalid email</FormFeedback>
              ))}
          </>
        )}
      </FormGroup>

      <FormGroup>
        <Label hidden for="auth-password">
          Password
        </Label>
        <Input
          valid={
            false || (!!controlPassword.isValid && !controlPassword.showError)
          }
          invalid={
            false || (!controlPassword.isValid && !!controlPassword.showError)
          }
          type="password"
          name="password"
          id="auth-password"
          placeholder="password"
          value={controlPassword.value}
          onChange={onChangeHandler}
        />

        {controlPassword.showError && (
          <>
            {(controlPassword.errors.empty && (
              <FormFeedback>empty value</FormFeedback>
            )) ||
              (controlPassword.errors.minLength && (
                <FormFeedback>at least 6 character required</FormFeedback>
              ))}
          </>
        )}
      </FormGroup>

      <div className="text-center">
        <ButtonGroup>
          <Button onClick={onLogin}>LOGIN</Button>
          <Button onClick={onReg}>REGISTRATION</Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

AuthForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onLogin: PropTypes.func,
  onReg: PropTypes.func,
  controlEmail: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
    showError: PropTypes.bool,
    errors: PropTypes.shape({
      empty: PropTypes.bool,
      email: PropTypes.bool
    })
  }),
  controlPassword: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
    showError: PropTypes.bool,
    errors: PropTypes.shape({
      empty: PropTypes.bool,
      minLength: PropTypes.bool
    })
  })
};

export default AuthForm;
