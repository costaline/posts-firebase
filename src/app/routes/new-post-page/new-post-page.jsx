import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newPostActions } from "~store/actions";
import NewPost from "~components/new-post";

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
      <NewPost
        onSubmitHandler={this.onSubmitHandler}
        onChangeHandler={this.onChangeHandler}
        valTitle={this.state.title}
        valBody={this.state.body}
      />
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
