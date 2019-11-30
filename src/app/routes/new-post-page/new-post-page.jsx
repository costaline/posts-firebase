import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newPostActions } from "~store/actions";
import ErrorBoundary from "~hocs/error-boundary";

class NewPostPage extends Component {
  static propTypes = {
    sendPost: PropTypes.func.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string
    })
  };

  state = {
    title: "",
    body: "",
    user_id: this.props.user.id,
    email: this.props.user.email
  };

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();

    this.props.sendPost(this.state);

    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <ErrorBoundary>
        <div>
          <h2>New post page work</h2>
          <form onSubmit={this.onSubmitHandler}>
            <label htmlFor="new-post-title">Title</label>
            <input
              name="title"
              onChange={this.onChangeHandler}
              value={this.state.title}
              type="text"
              id="new-post-title"
            />
            <label htmlFor="new-post-body">Body</label>
            <textarea
              name="body"
              onChange={this.onChangeHandler}
              value={this.state.body}
              id="new-post-body"
              cols="40"
              rows="5"
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, { sendPost: newPostActions.sendPost })(
  NewPostPage
);
