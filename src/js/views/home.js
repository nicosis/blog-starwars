import React, { useState, useEffect } from "react";
import '../../styles/home.css'

import Characters from "./Characters";
import Species from "./Species";

export const Home = () => {
  return (
    <div >
      <p className="text">Characters</p>
      <Characters />
      <p className="text">Species</p>
      <Species />
    </div>
  );
};
