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
      email: PropTypes.string
    }),
    requesting: PropTypes.bool.isRequired,
    error: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { title, body, date, email = "unknown" } = this.props.post;
    const { requesting, error } = this.props;

    const postDate = date ? format(new Date(date), "yyyy-MM-dd") : "unknown";

    return (
      <>
        {requesting && !error ? (
          <Loader />
        ) : (
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <small>{postDate}</small>
            <cite>{email}</cite>
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
    error: state.postReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPost: postActions.fetchPost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
