//@ts-check

// eslint-disable-next-line no-case-declarations, no-useless-escape
const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PASS_MIN_LENGTH = 6;

export const validateControl = (controlValues, type) => {
  let { value = "", errors = {}, isValid = false } = controlValues;

  errors.empty = value.trim() === "" ? true : false;

  switch (type) {
    case "email":
      errors.email = !REGEX_EMAIL.test(value) ? true : false;
      break;

    case "password":
      errors.minLength = value.length < PASS_MIN_LENGTH ? true : false;
      break;
  }

  const controlErrors = Object.keys(errors).filter(
    (error) => errors[error] !== false
  );

  isValid = controlErrors.length ? false : true;

  return {
    value,
    isValid,
    errors
  };
};

const showControlError = (control) => {
  control.showError = !control.isValid ? true : false;

  return control;
};

export const validateForm = (formControls) => {
  let isFormValid = true;
  let controlsWithShowErrors = {};

  Object.keys(formControls).forEach((control) => {
    // если отправляется форма, один или несколько полей которой не были затронуты
    if (formControls[control].isValid === undefined) {
      let res = validateControl(formControls[control], control);

      formControls[control] = { ...res };
    }

    // валидация формы после проверки каждого поля
    isFormValid = formControls[control].isValid && isFormValid;

    let controlShowedError = showControlError(formControls[control]);

    controlsWithShowErrors[control] = { ...controlShowedError };
  });

  return { controlsWithShowErrors, isFormValid };
};
