import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPost = styled.div`
  padding-top: 50px;

  & h2 {
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
  }

  & p {
    font-size: 1.5rem;
    text-align: justify;

    &::first-letter {
      padding-left: 25px;
      text-transform: capitalize;
    }
  }

  & .info {
    display: flex;
    justify-content: space-between;

    font-size: 1rem;
  }
`;

const PostView = ({ title, body, date, email }) => (
  <StyledPost>
    <h2>{title}</h2>
    <p>{body}</p>
    <p className="info">
      <small>{date}</small>
      <cite>{email}</cite>
    </p>
  </StyledPost>
);

PostView.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string
};

export default PostView;
