import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/characters.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Characters = () => {
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("?page=1&limit=10");

  const { store, actions } = useContext(Context);

  const getAllelements = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(urlApiPeople + currentPage, requestOptions);
    const data = await response.json();
    setPeople(data.results);
    setTotalPages([...Array(data.total_pages)]);
  };

  useEffect(() => {
    getAllelements();
  }, [currentPage]);

  const handleButtonPage = (page) => {
    console.log("page:", page);
    setCurrentPage(`?page=${page}&limit=10`);
  };

  const handleAddFav = (e, uid, name) => {
    e.preventDefault();
    actions.addCharacter(uid, name);
  };
console.log('en store:',store.characters[0]);
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
          <div key={ind} className="card-container">
            <Link to={`char-single/${itm.uid}`} className="card-link">
              <div className="card-container-img">
                <img
                  className="card-imagen"
                  src={`${imgUrl}${itm.uid}.jpg`}
                  alt="Char Img"
                />
                <span className="card-favIcon">
                  {store.characters.some((char)=> char.uid === itm.uid && char.favorite)?(
                    <MdFavorite onClick={(e) => handleAddFav(e, itm.uid, itm.name)} />
                  ):(
                    <MdFavoriteBorder onClick={(e) => handleAddFav(e, itm.uid, itm.name)} />
                  )}

                </span>
              </div>
              <span className="card-text">
                <p style={{ margin: "0" }}>{itm.name}</p>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
