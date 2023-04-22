import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singleVehicle.css";
const urlApiVehicles = "https://www.swapi.tech/api/vehicles/";
const imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";

const VehicleSingle = () => {
  const [single, setSingle] = useState([]);
  const params = useParams();

  const getAllelements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(urlApiVehicles + params.id, requestOptions)
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
      <div className="vehicle-single-card">
        <div className="vehicle-single-card-img">
          <img className="vehicle-single-card-img-img" src={imgUrl + params.id + ".jpg"} alt="Character Image" />
        </div>
        <div className="vehicle-single-card-info">
          <h1 className="">
            <strong>{single.name}</strong>
          </h1>
          <hr />
          <h3 className="">xx: {single.birth_year}</h3>
          <h3 className="">xx: {single.height} cm</h3>
          <h3 className="">xx: {single.mass} kg</h3>
          <h3 className="single-card-info-cap">xx: {single.gender}</h3>
          <h3 className="single-card-info-cap">
            xx: {single.hair_color}
          </h3>
          <h3 className="single-card-info-cap">
            xx: {single.skin_color}
          </h3>
          <h3 className="single-card-info-cap">
            xx: {single.eye_color}
          </h3>
          <hr />
          <Link to="/">
            <button className="button-50" role="button">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleSingle;
