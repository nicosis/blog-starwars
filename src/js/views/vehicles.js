import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import styles from "../../styles/vehicles.modules.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

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
    <div className="character-container">
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
      <div className="cards-view">
        {vehicle.map((itm, ind) => (
          <div key={ind} className="card-container">
            <Link to={`vehicle/${itm.uid}`} className="card-link">
              <div className="card-container-img">
                <img
                  className="card-imagen"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  alt="Vehicle Image"
                />
                {/* <span className="card-favIcon">
                  {store.characters.some(
                    (char) => char.uid === itm.uid && char.favorite
                  ) ? (
                    <MdFavorite
                      onClick={(e) => handleAddFav(e, itm.uid, itm.name)}
                    />
                  ) : (
                    <MdFavoriteBorder
                      onClick={(e) => handleAddFav(e, itm.uid, itm.name)}
                    />
                  )}
                </span> */}
              </div>
              <span className={styles['vehicles-card-text']}>
                <p style={{ margin: "0" }}>Name: {itm.properties.name}</p>
                <p style={{ margin: "0" }}>
                  Passengers: {itm.properties.passengers}
                </p>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
