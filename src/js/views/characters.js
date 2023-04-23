import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/characters.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { element } from "prop-types";

const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Characters = () => {
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("?page=1&limit=10");

  const { store, actions } = useContext(Context);

  // Metodo async/await
  const getAllelements = async () => {
    const response = await fetch(urlApiPeople + currentPage);
    const data = await response.json();
    setTotalPages([...Array(data.total_pages).keys()]);

    const promises = data.results.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      return data.result;
    });
    const results = await Promise.all(promises);
    setPeople(results);
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
          CHARACTERS
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
        {people.map((itm, ind) => (
          <div key={ind} className="characters-card-container">
            <Link to={`character/${itm.uid}`} className="card-link">
              <div className="characters-card-container-img">
                <img
                  className="card-imagen"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  alt="Character Image"
                />
                <span className="card-favIcon">
                  {store.characters.some(
                    (char) => char.uid === itm.uid && char.favorite
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
              <div className="characters-card-container-text">
                <p>{itm.properties.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
