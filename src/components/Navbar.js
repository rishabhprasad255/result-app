import React from "react";
import { Link } from "react-router-dom";
import "../css-flies/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link
          className="show-dev"
          style={{ textDecoration: "none", color: "blanchedalmond" }}
          to="/developer"
        >
          Developer
        </Link>
        <Link
          style={{ textDecoration: "none", color: "blanchedalmond" }}
          to="/"
        >
          CHECK RESULT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
