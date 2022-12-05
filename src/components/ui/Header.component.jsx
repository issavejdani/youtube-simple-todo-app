import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>M.Taheri</h1>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">AboutUs</a>
        </li>
        <li>
          <a href="#">ContactUs</a>
        </li>
      </ul>
      <FaBars className="menu-bars" />
    </header>
  );
};

export default Header;
