import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { title, body, date, email, id } = post;

  const postDate = format(new Date(date), "yyyy-MM-dd");

  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <cite className="text-muted">{email}</cite>
        </p>
        <Link className="card-link" to={`/posts/${id}`}>
          READ MORE
        </Link>
      </div>
      <div className="card-footer">
        <small className="text-muted">{postDate}</small>
      </div>
    </>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.string
  })
};

export default PostItem;
