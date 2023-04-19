import React, { useState, useEffect } from "react";
const apiUrl = "https://www.swapi.tech/api/vehicles"

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

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
      .then((data) => setVehicles(data.results))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <h1>Vehicles</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {vehicles.map((itm, ind) => (
          <div key={ind} className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{itm.name}</h5>
                <p className="card-text">
                  This is a longer card with supporting.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
