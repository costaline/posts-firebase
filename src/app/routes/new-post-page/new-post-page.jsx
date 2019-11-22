import React, { Component } from "react";

class NewPostPage extends Component {
  state = {
    email: "",
    phone: ""
  };

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    this.setState({ email: "", phone: "" });
  };

  render() {
    return (
      <div>
        <h2>New post page work</h2>
        <form onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.onChangeHandler}
            value={this.state.email}
            type="email"
            name="email"
          />
          <input
            onChange={this.onChangeHandler}
            value={this.state.phone}
            type="tel"
            name="phone"
          />
          <button type="submit">REG</button>
        </form>
      </div>
    );
  }
}

export default NewPostPage;
