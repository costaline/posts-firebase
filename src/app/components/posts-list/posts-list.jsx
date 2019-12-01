import React from "react";
import PropTypes from "prop-types";

import PostItem from "~components/post-item";

const PostsList = ({ posts }) => (
  <ul className="card-columns">
    {posts
      .sort((a, b) => b.date - a.date)
      .map((post) => {
        return (
          <li className="card" key={`post-${post.id}`}>
            <PostItem post={post} />
          </li>
        );
      })}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList;
