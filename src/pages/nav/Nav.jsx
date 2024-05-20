import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <div className="nav-item">
          <Link to="/">Marco<br></br>Maldarella</Link>
        </div>
      </div>
      <div className="links">
        <div className="nav-item">
          <Link to="/about">Work</Link>
        </div>
        <div className="nav-item">
          <Link to="/info">Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
