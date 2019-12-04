import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import styled from "styled-components";

const StyledControls = styled.div`
  text-align: center;
`;

const PostEdit = (props) => {
  const {
    onSubmitHandler,
    onCancelHandler,
    refTitle,
    refBody,
    valTitle,
    valBody
  } = props;

  return (
    <Form style={{ marginTop: "50px" }} onSubmit={onSubmitHandler}>
      <FormGroup row>
        <Label for="post-title" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="title"
            id="post-title"
            innerRef={refTitle}
            defaultValue={valTitle}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="post-body" sm={2}>
          Body
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="body"
            id="post-body"
            innerRef={refBody}
            defaultValue={valBody}
            rows="10"
          />
        </Col>
      </FormGroup>

      <StyledControls>
        <ButtonGroup>
          <Button color="success">EDIT</Button>
          <Button color="warning" type="button" onClick={onCancelHandler}>
            CANCEL
          </Button>
        </ButtonGroup>
      </StyledControls>
    </Form>
  );
};

PostEdit.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  onCancelHandler: PropTypes.func.isRequired,
  refTitle: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string.isRequired
    })
  }),
  refBody: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string.isRequired
    })
  }),
  valTitle: PropTypes.string.isRequired,
  valBody: PropTypes.string.isRequired
};

export default PostEdit;
