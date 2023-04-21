import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/favorites.css";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  /*   const [characters1, setChacters1] = useState(store.characters); //no guarda la info
  console.log('char nav:', characters1); */

  const handleDelFav = (uid, name) => {
    // console.log('clic delete', uid);
    actions.removeCharacter(uid, name);
  };

  return (
    <div>
      <div className="nav-dropDown">
        <li className="nav-item dropdown">
          <button
            className="button-favorites nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.characters.length})
          </button>
          <ul className="dropdown-menu rounded-0">
            {store.characters.map((itm, ind) => (
              <li key={ind}>
                <span className="dropdown-item d-flex justify-content-between">
                  <Link to={`char-single/${itm.uid}`}>
                    <span>{itm.name}</span>
                  </Link>
                  <span className="">
                    <i
                      className="fa-solid fa-delete-left"
                      onClick={() => handleDelFav(itm.uid, itm.name)}
                    />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Favorites;
