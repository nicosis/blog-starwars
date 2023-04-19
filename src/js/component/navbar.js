import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo-980.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-aux"></div>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo Star Wars" style={{ height: "80px" }} />
        </Link>
      </div>

      <div className="nav-dropDown">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
      </div>
    </nav>
  );
};
