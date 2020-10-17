import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NavBar() {
  return (
    <div className="Nav">
      <Container>
        <Row>
          {" "}
          <Col sm md lg="4">
            <NavLink
              to="/"
              exact={true}
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              <Button variant="outline-success">Home</Button>
            </NavLink>
          </Col>{" "}
          <Col sm md lg="4">
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              <Button variant="outline-success">About </Button>
            </NavLink>
          </Col>{" "}
          <Col sm md lg="4">
            <NavLink
              to="/discover"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              <Button variant="outline-success">Discover Movies </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
