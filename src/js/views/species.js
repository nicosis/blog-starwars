import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/characters.css";

const apiUrl = "https://www.swapi.tech/api/species/";
const imgUrl = "https://starwars-visualguide.com/assets/img/species/";

const Species = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getAllelements();
  }, []);

  const getAllelements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setSpecies(data.results))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="scroll-container">
      <div className="card-view">
        {species.map((itm, ind) => (
          <div key={ind} className="card-container">
            <Link to={`spec-single/${itm.uid}`} className="">
              <div className="card-container-img">
                <img className="card-imagen" src={`${imgUrl}${itm.uid}.jpg`} alt="" />
              </div>
              <span className="card-text">
                <h5>{itm.name}</h5>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Species;
