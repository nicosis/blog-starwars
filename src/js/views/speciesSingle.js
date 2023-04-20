import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/charactersSingle.css";
const apiUrl = "https://www.swapi.tech/api/species/";
const imgUrl = "https://starwars-visualguide.com/assets/img/species/";

const SpeciesSingle = () => {
  const [single, setSingle] = useState([]);
  const params = useParams();

  useEffect(() => {
    getAllelements();
  }, []);

  const getAllelements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(apiUrl + params.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result.properties);
        setSingle(data.result.properties);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="single-container">
      <div className="single-card">
        <img
          src={imgUrl + params.id + ".jpg"}
          className="single-card-img"
          alt="..."
        />
        <span className="single-card-info">
          <h1 className="">Specie: {single.name && single.name.toUpperCase()}</h1>
          <h3 className="">Classification: {single.classification}</h3>

          <Link to="/">
          <button className="button-4" role="button">Back</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SpeciesSingle;
