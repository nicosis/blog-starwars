import React, { useState, useEffect } from "react";
import '../../styles/home.css'

import Characters from "./Characters";
import Species from "./Species";

export const Home = () => {
  return (
    <div>
      <h3>Characters</h3>
      <Characters />
      <h3>Species</h3>
      <Species />
    </div>
  );
};
