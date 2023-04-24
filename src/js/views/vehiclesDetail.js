import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/vehiclesDetail.css";
import imgNotAvaible from "../../img/star-wars-not.png";
const urlApiVehicles = "https://www.swapi.tech/api/vehicles/";
const imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";

const VehiclesDetail = () => {
  const [single, setSingle] = useState([]);
  const params = useParams();

  const getAllelements = async () => {
    const response = await fetch(urlApiVehicles + params.id);
    const data = await response.json();
    setSingle(data.result.properties);
  };

  useEffect(() => {
    getAllelements();
  }, []);

  return (
    <div className="vehicles-single-container">
      <div className="vehicle-single-card">
        <div className="vehicle-single-card-img">
          <img
            className="vehicle-single-card-img-img"
            src={imgUrl + params.id + ".jpg"}
            onError={(e) => (e.target.src = imgNotAvaible)}
            alt="Character Image"
          />
        </div>
        <div className="vehicle-single-card-info">
          <h1 className="single-card-info-cap">
            <strong>{single.name}</strong>
          </h1>
          <hr />
          <h3 className="single-card-info-cap">Model: {single.model}</h3>
          <h3 className="single-card-info-cap">
            Vehicle Class: {single.vehicle_class}
          </h3>
          <h3 className="">Cost: {single.cost_in_credits} credits</h3>
          <h3 className="">Speed: {single.max_atmosphering_speed} km/h</h3>
          <h3 className="">Length: {single.length} m</h3>
          <h3 className="">Crew: {single.crew}</h3>
          <h3 className="">Passengers: {single.passengers}</h3>
          <h3 className="">Cargo Capacity: {single.cargo_capacity} kg</h3>
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

export default VehiclesDetail;
