import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">{props.name}</Navbar.Brand>
    </Navbar>
  );
}
