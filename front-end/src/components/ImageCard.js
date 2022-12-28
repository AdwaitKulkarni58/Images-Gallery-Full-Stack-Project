import React from "react";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function ImageCard({ image }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="dark">Delete</Button>
      </Card.Body>
    </Card>
  );
}
