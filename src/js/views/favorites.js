import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <button>{store.characters.length}</button>
    </div>
  );
};

export default Favorites;
