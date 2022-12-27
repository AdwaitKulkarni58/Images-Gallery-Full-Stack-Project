import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Search for image" />
              </Col>
              <Col>
                <Button variant="outline-primary">Search</Button>{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
