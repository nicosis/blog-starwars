import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/star-wars-logo-980.png'
import '../../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Logo Star Wars" style={{height:'80px'}}/>
      </Link>
    </nav>
  );
};
