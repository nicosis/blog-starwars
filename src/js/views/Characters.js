import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Characters.css";
import { MdFavorite } from "react-icons/md";

const apiUrl = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Characters = () => {
  const [people, setPeople] = useState([]);

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
      .then((data) => setPeople(data.results))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="scroll-container">
      <div className="card-view">
        {people.map((itm, ind) => (
          <div key={ind} className="card-container">
            <Link to={`char-single/${itm.uid}`} className="">
              <div className="card-container-img">
                <img
                  className="card-imagen"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  alt="Char Img"
                />
                <span class="icono"><MdFavorite /></span>
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

export default Characters;
