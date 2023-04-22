import React, { useState, useEffect } from "react";
import "../../styles/home.css";

import Characters from "./characters";
import Vehicles from "./vehicles";

export const Home = () => {
  return (
    <div>
      <Characters />
      <center>
        <i className="fa-brands fa-galactic-republic fa-icons"></i>
        <i className="fa-brands fa-old-republic fa-icons"></i>
        <i className="fa-brands fa-jedi-order fa-icons"></i>
        <i className="fa-solid fa-jedi fa-icons"></i>
        <i className="fa-brands fa-jedi-order fa-icons"></i>
        <i className="fa-brands fa-old-republic fa-icons"></i>
        <i className="fa-brands fa-galactic-republic fa-icons"></i>
      </center>
      <Vehicles />
    </div>
  );
};
