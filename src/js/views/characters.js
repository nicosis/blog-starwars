import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/characters.css";
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

const handleFavorites = (e) => {
  e.preventDefault();
  console.log('click favoritos');
}

  return (
    <div className="scroll-container00">
      <div className="card-view">
        {people.map((itm, ind) => (
          <div key={ind} className="card-container">
            <Link to={`char-single/${itm.uid}`} className="card-link">
              <div className="card-container-img">
                <img
                  className="card-imagen"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  alt="Char Img"
                />
                <span className="card-icon"><MdFavorite onClick={(e)=>handleFavorites(e)} /></span>
              </div>
              <span className="card-text">
                <p style={{margin:'0'}}>{itm.name}</p>
                
              </span>
            </Link>
          </div>
        ))}
      </div>
        <div className="button-container">
          <button>1</button>
          <button>2</button>
        </div>
    </div>
  );
};

export default Characters;
