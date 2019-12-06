import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  & div {
    top: 0;
    left: 0;
    z-index: 4;

    width: 100%;
    height: 100%;
  }

  & p {
    position: absolute;
    z-index: 5;
    top: calc(50% - 150px);
    left: calc(50% - 150px);

    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center

    background-color: white;

    border-radius: 5px;
  }

  & span {
    display: block
  }
`;

const AuthError = ({ message, onClickHandler }) => {
  return (
    <StyledError>
      <div onClick={onClickHandler} />
      <p>
        <span>{message}</span>
      </p>
    </StyledError>
  );
};

AuthError.propTypes = {
  message: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default AuthError;
