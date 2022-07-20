import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="py-3">
            Copyright &copy; Real Estate {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
