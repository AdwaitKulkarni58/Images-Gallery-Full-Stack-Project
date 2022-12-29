import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Welcome() {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>An application to fetch images using Unsplash API.</p>
      <p>
        <Button variant="dark" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
}
