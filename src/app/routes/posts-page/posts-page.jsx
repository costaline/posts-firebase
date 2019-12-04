import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { postsActions } from "~store/actions";
import Loader from "~components/loader";
import PostsList from "~components/posts-list";

const PostsPage = ({ fetchPosts, posts, loading, error }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="col">
      {loading && !error ? <Loader /> : <PostsList posts={posts} />}

      {error && <p>Something wrong...</p>}
    </div>
  );
};

PostsPage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    loading: state.postsReducer.loading,
    error: state.postsReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts: postsActions.fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
