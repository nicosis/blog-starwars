import React, { useState, useContext } from "react";
// import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Favorites from "./favorites";

import logo from "../../img/star-wars-logo-980.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  // const { store, actions } = useContext(Context);

  return (
    <nav className="nav">
      <div className="nav-aux"></div>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo Star Wars" style={{ height: "80px" }} />
        </Link>
      </div>
      <div className="nav-dropDown">
        <Favorites />
      </div>
    </nav>
  );
};
