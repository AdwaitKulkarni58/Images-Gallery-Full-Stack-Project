import React from "react";
import { Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navStyle = {
  backgroundColor: "black",
};

export default function Header(props) {
  return (
    <Navbar style={navStyle} variant="dark">
      <Logo style={{ maxWidth: "30em" }} />
    </Navbar>
  );
}
