import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Search(props) {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={props.handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={props.input}
                  onChange={(e) => props.setInput(e.target.value)}
                  placeholder="Search for image"
                />
              </Col>
              <Col>
                <Button variant="dark" type="submit">
                  Search
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
