import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import styles from "../../styles/vehicles.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import imgNotAvaible from '../../img/star-wars-not.png'

const urlApiVehicle = "https://www.swapi.tech/api/vehicles";
const imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";

const Vehicles = () => {
  const [vehicle, setVehicle] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("?page=1&limit=10");

  const { store, actions } = useContext(Context);

  // Metodo async/await
  const getAllelements = async () => {
    const response = await fetch(urlApiVehicle + currentPage);
    const data = await response.json();
    setTotalPages([...Array(data.total_pages).keys()]);

    const promises = data.results.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      return data.result;
    });
    const results = await Promise.all(promises);
    setVehicle(results);
  };

  useEffect(() => {
    getAllelements();
  }, [currentPage]);

  const handleButtonPage = (page) => {
    setCurrentPage(`?page=${page}&limit=10`);
  };

  const handleAddFav = (e, uid, name) => {
    e.preventDefault();
    actions.addToFavorites(uid, name);
  };
  
  return (
    <div className="vehicles-container">
      <div className="button-container">
        <span className="button-50" style={{ cursor: "default" }}>
          VEHICLES
        </span>
        {totalPages.map((_, ind) => (
          <button
            className="button-50"
            role="button"
            key={ind}
            value={ind + 1}
            onClick={(e) => handleButtonPage(e.target.value)}
          >
            {ind + 1}
          </button>
        ))}
      </div>
      <div className="vehicles-cards-view">
        {vehicle.map((itm, ind) => (
          <div key={ind} className="vehicles-card-container">
            <Link to={`vehicle/${itm.uid}`} className="card-link">
              <div className="vehicles-card-container-img">
                <img
                  className="vehicles-card-img"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  onError={(e)=>e.target.src=imgNotAvaible}
                  alt="Vehicle Image"
                />
                <span className="card-favIcon">
                  {store.characters.some(
                    (char) => char.uid === itm.uid && char.name === itm.properties.name && char.favorite
                  ) ? (
                    <MdFavorite
                      onClick={(e) => handleAddFav(e, itm.uid, itm.properties.name)}
                    />
                  ) : (
                    <MdFavoriteBorder
                      onClick={(e) => handleAddFav(e, itm.uid, itm.properties.name)}
                    />
                  )}
                </span>
              </div>
              <span className="vehicles-card-text">
                <p>{itm.properties.name}</p>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
