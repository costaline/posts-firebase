import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PostItem from "~components/post-item";

const PostsList = ({ posts }) => (
  <ul>
    {posts
      .sort((a, b) => b.date - a.date)
      .map((post) => {
        return (
          <li key={`post-${post.id}`}>
            <PostItem post={post} />
            <Link to={`/posts/${post.id}`}>READ MORE</Link>
          </li>
        );
      })}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList;
