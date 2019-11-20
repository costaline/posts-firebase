import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { postsActions } from "~store/actions";
import Loader from "~components/loader";
import PostItem from "~components/post-item";

const PostsPage = ({ fetchPosts, posts, loading, error }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = () => {
    return posts.map((post) => {
      return (
        <li key={`post-${post.id}`}>
          <PostItem post={post} />
        </li>
      );
    });
  };

  return (
    <section>
      <h2>PostsPage works</h2>
      {loading && !error ? <Loader /> : <ul>{renderItem()}</ul>}
      {error ? <p>Something wrong...</p> : null}
    </section>
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
