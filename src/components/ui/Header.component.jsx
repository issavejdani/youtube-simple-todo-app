import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>M.Taheri</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/about-us">AboutUs</Link>
        </li>
        <li>
          <Link to="/contact-us">ContactUs</Link>
        </li>
      </ul>
      <FaBars className="menu-bars" />
    </header>
  );
};

export default Header;
