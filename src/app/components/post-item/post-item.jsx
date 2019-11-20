import React from "react";
import PropTypes from "prop-types";

const PostItem = ({ post: { title, body } }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostItem;
