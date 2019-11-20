import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { firebase } from "~services/axios";
import { postsActions } from "~store/actions";

const PostsPage = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await firebase.get("/posts.json");
      console.log(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <section>
      <h2>PostsPage works</h2>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts: postsActions.fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
