import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <p>via delle Moline 1/2 Bologna</p>
        <p>marcomaldarella@gmail.com</p>
      </div>
      <div className="footer-item footer-links">
        <Link to="/">instagram</Link>
        <Link to="/">soundcloud</Link>
      </div>
    </div>
  );
};

export default Footer;
