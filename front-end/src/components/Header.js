import React from "react";
import { Navbar } from "react-bootstrap";

const navStyle = {
  backgroundColor: "black",
};

export default function Header(props) {
  return (
    <Navbar style={navStyle} variant="dark">
      <Navbar.Brand href="/">{props.name}</Navbar.Brand>
    </Navbar>
  );
}
