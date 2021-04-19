import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import './Control.css';

const Control = ({ setCurrentPage, previousPage, nextPage }) => {
  return (
    <Container className="control-button">
      <ButtonGroup>
        <button
          className="btn btn-dark btn-lg"
          onClick={() => {
            setCurrentPage(previousPage);
          }}
          style={{ visibility: !previousPage ? "hidden" : "visible" }}
        >
          Prev. page
        </button>

        <Button
          className="btn btn-dark btn-lg"
          onClick={() => setCurrentPage(nextPage)}
          style={{ visibility: !nextPage ? "hidden" : "visible" }}
        >
          Next page
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Control;
