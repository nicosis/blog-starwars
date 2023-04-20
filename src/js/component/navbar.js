import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import logo from "../../img/star-wars-logo-980.png";
import "../../styles/navbar.css";
import Favorites from "../views/favorites";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
/*   const [characters1, setChacters1] = useState(store.characters); //no guarda la info
  console.log('char nav:', characters1); */
  return (
    <nav className="nav">
      <div className="nav-aux">
        <Favorites />
      </div>
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
            {store.characters.map((itm, ind) => (
              <li key={ind}>
                <a className="dropdown-item" href="#">
                  {itm.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </div>
    </nav>
  );
};
