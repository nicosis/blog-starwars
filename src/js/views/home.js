import React, { useState, useEffect } from "react";
import '../../styles/home.css'

import Characters from "./characters";
import Species from "./species";

export const Home = () => {
  return (
    <div >
      <Characters />
      <p className="text">Species</p>
      <Species />
    </div>
  );
};
