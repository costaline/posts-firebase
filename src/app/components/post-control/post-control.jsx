import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";

const StyledControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PostControl = ({ deletePost, toggleEdit }) => {
  return (
    <StyledControls>
      <ButtonGroup>
        <Button color="primary" onClick={toggleEdit}>
          EDIT
        </Button>
        <Button color="danger" onClick={deletePost}>
          DELETE
        </Button>
      </ButtonGroup>
    </StyledControls>
  );
};

PostControl.propTypes = {
  deletePost: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired
};

export default PostControl;
