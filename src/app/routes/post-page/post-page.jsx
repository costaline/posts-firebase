import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { format } from "date-fns";
import PropTypes from "prop-types";

import { postActions } from "~store/actions";
import Loader from "~components/loader";
import ErrorBoundary from "~hocs/error-boundary";
import PostView from "~components/post-view";
import ErrorMessage from "~components/error-message";
import PostControl from "~components/post-control";

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
    }),
    history: PropTypes.object,
    deletePost: PropTypes.func,
    editPost: PropTypes.func,
    edit: PropTypes.bool,
    toggleEdit: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.bodyInput = React.createRef();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  componentWillUnmount() {
    if (this.props.edit) {
      this.props.toggleEdit();
    }
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

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    this.props.editPost(this.props.match.params.id, {
      title: this.titleInput.current.value,
      body: this.bodyInput.current.value
    });
  };

  render() {
    const {
      title,
      body,
      date,
      email = "unknown",
      user_id: post_user_id
    } = this.props.post;

    const postDate = date ? format(new Date(date), "yyyy-MM-dd") : "unknown";

    let current_user_id = "";

    if (this.props.user) {
      current_user_id = this.props.user.id;
    }

    const { requesting, error, edit } = this.props;

    const mode = {
      isRequest: requesting,
      isError: error,
      isView: !edit && !requesting,
      isAuthor: post_user_id === current_user_id && !edit && !requesting,
      isEditor: edit
    };

    return (
      <ErrorBoundary>
        {mode.isRequest && <Loader />}

        {mode.isError && <ErrorMessage />}

        {mode.isView && (
          <PostView title={title} body={body} date={postDate} email={email} />
        )}

        {mode.isAuthor && (
          <PostControl
            deletePost={this.deletePost}
            toggleEdit={this.props.toggleEdit}
          />
        )}

        {mode.isEditor && (
          <form onSubmit={this.onSubmitHandler}>
            <input
              ref={this.titleInput}
              defaultValue={title}
              type="text"
              id="edit-title"
            />
            <br />
            <textarea
              ref={this.bodyInput}
              defaultValue={body}
              id="edit-body"
              cols="30"
              rows="10"
            />
            <button type="submit">EDIT</button>
          </form>
        )}
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.post,
    requesting: state.postReducer.requesting,
    error: state.postReducer.error,
    user: state.authReducer.user,
    edit: state.postReducer.edit
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPost: postActions.fetchPost,
      deletePost: postActions.deletePost,
      toggleEdit: postActions.toggleEdit,
      editPost: postActions.editPost
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
