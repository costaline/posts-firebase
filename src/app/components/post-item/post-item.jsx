import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const PostItem = ({ post: { title, body, date, email } }) => {
  const postDate = format(new Date(date), "yyyy-MM-dd");

  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <small>{postDate}</small>
      <cite>{email}</cite>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.number,
    email: PropTypes.string
  })
};

export default PostItem;
