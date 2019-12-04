import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const NewPost = (props) => {
  const { onSubmitHandler, onChangeHandler, valTitle, valBody } = props;

  const history = useHistory();

  return (
    // TODO: validations
    <Form onSubmit={onSubmitHandler}>
      <FormGroup row>
        <Label hidden for="new-post-title">
          Title
        </Label>
        <Col>
          <Input
            name="title"
            onChange={onChangeHandler}
            value={valTitle}
            type="text"
            id="new-post-title"
            placeholder="Title"
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label hidden for="new-post-body">
          Body
        </Label>
        <Col>
          <Input
            type="textarea"
            name="body"
            onChange={onChangeHandler}
            value={valBody}
            id="new-post-body"
            rows="5"
            placeholder="Body"
            required
          />
        </Col>
      </FormGroup>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup className="text-center">
          <Button>SEND</Button>
          <Button color="primary" onClick={() => history.push("/posts")}>
            BACK
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

NewPost.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  valTitle: PropTypes.string.isRequired,
  valBody: PropTypes.string.isRequired
};

export default NewPost;
