import React from "react";
import PropTypes from "prop-types";

const PostView = ({ title, body, date, email }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <small>{date}</small>
    <cite>{email}</cite>
  </div>
);

PostView.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string
};

export default PostView;
