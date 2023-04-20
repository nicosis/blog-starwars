import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/charactersSingle.css";
const apiUrl = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const CharacterSingle = () => {
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
        // console.log(data.result.properties);
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
          <h1 className="">Name: {single.name}</h1>
          <h3 className="">Birth Year: {single.birth_year}</h3>
          <h3 className="">Height: {single.height} cm</h3>
          <h3 className="">Mass: {single.mass} kg</h3>
          <h3 className="">Gender: {single.gender && single.gender.toUpperCase()}</h3>
          <h3 className="">Hair Color: {single.hair_color && single.hair_color.toUpperCase()}</h3>
          <h3 className="">Skin Color: {single.skin_color && single.skin_color.toUpperCase}</h3>
          <h3 className="">Eye Color: {single.eye_color && single.eye_color.toUpperCase}</h3>
          <Link to="/">
          <button class="button-50" role="button">Back</button>

          </Link>
        </span>
      </div>
    </div>
  );
};

export default CharacterSingle;
