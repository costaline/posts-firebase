import React, { Component } from "react";
import { firebaseDBSendPost } from "~services/axios";

class NewPostPage extends Component {
  state = {
    title: "",
    body: ""
  };

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();

    firebaseDBSendPost(this.state);

    this.setState({ title: "", body: "" });
  };

  render() {
    return (
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
    );
  }
}

export default NewPostPage;
