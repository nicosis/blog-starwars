import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singleCharacter.css";
const apiUrl = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const CharacterSingle = () => {
  const [single, setSingle] = useState([]);
  const params = useParams();

  const getAllelements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(apiUrl + params.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setSingle(data.result.properties);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllelements();
  }, []);

  return (
    <div className="single-container">
      <div className="single-card">
        <img
          src={imgUrl + params.id + ".jpg"}
          className="single-card-img"
          alt="Character Image"
        />
        <span className="single-card-info">
          <h1 className="">
            <strong>{single.name}</strong>
          </h1>
          <hr />
          <h3 className="">Birth Year: {single.birth_year}</h3>
          <h3 className="">Height: {single.height} cm</h3>
          <h3 className="">Mass: {single.mass} kg</h3>
          <h3 className="single-card-info-cap">Gender: {single.gender}</h3>
          <h3 className="single-card-info-cap">
            Hair Color: {single.hair_color}
          </h3>
          <h3 className="single-card-info-cap">
            Skin Color: {single.skin_color}
          </h3>
          <h3 className="single-card-info-cap">
            Eye Color: {single.eye_color}
          </h3>
          <hr />
          <Link to="/">
            <button className="button-50" role="button">
              Back
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CharacterSingle;
