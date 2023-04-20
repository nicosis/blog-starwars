import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/characters.css";
import { MdFavorite } from "react-icons/md";

const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Characters = () => {
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("?page=1&limit=10");

  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  const getAllelements = async () => {
    const response = await fetch(urlApiPeople + currentPage);
    const data = await response.json();
    setPeople(data.results);
    setTotalPages([...Array(data.total_pages)]);
    // console.log(data.next,'lol:', data.total_pages);
  };

  useEffect(() => {
    getAllelements();
  }, [currentPage]);

  const handleFavorites = (e) => {
    e.preventDefault();
    console.log("click favoritos");
  };

  const handleButtonPage = (page) => {
    console.log("page:", page);
    setCurrentPage(`?page=${page}&limit=10`);
  };

  return (
    <div className="">
      <div className="button-container">
        <span className="button-50" style={{cursor:'default'}}>CHARACTERS</span>
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
                <span className="card-icon">
                  <MdFavorite onClick={(e) => handleFavorites(e)} />
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
