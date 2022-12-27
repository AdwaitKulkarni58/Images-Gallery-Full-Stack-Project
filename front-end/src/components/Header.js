import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
    </Navbar>
  );
}
