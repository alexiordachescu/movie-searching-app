import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <div className="Container">
      <Button variant="warning" className="Colored">
        <NavLink
          to="/"
          exact={true}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Home
        </NavLink>
      </Button>
      <Button variant="warning" className="Colored">
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          About
        </NavLink>
      </Button>
      <Button variant="warning" className="Colored">
        <NavLink
          to="/discover"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Discover Movies
        </NavLink>
      </Button>
    </div>
  );
}
