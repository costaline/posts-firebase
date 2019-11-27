import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { format } from "date-fns";
import PropTypes from "prop-types";

import { postActions } from "~store/actions";
import Loader from "~components/loader";

class PostPage extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    post: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.number,
      email: PropTypes.string,
      user_id: PropTypes.string
    }),
    requesting: PropTypes.bool.isRequired,
    error: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
    user: PropTypes.shape({
      id: PropTypes.string
    })
  };

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  deletePost = () => {
    const {
      match: {
        params: { id }
      },
      history
    } = this.props;

    this.props.deletePost(id, history);
  };

  render() {
    const {
      title,
      body,
      date,
      email = "unknown",
      user_id: post_user_id
    } = this.props.post;

    const { id: current_user_id } = this.props.user;

    const { requesting, error } = this.props;

    const postDate = date ? format(new Date(date), "yyyy-MM-dd") : "unknown";

    return (
      <>
        {requesting && !error ? (
          <Loader />
        ) : (
          <div>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
              <small>{postDate}</small>
              <cite>{email}</cite>
            </div>
            {post_user_id === current_user_id && (
              <div>
                <button onClick={this.deletePost}>DELETE</button>
                <button>EDIT</button>
              </div>
            )}
          </div>
        )}
        {error ? <p>Something wrong...</p> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.post,
    requesting: state.postReducer.requesting,
    error: state.postReducer.error,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchPost: postActions.fetchPost, deletePost: postActions.deletePost },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
