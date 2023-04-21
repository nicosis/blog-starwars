const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [], //agrero una propiedad donde voy a almacenar los characters favoritos
    },
    actions: {
      addCharacter(uid, name, favorite) {
        // recuperar la amacen global
        const store = getStore();
        // crear nuevo caracter y añadirlo a la propiedad creada arriba
        const newCharacter = [...store.characters, { uid, name, favorite }]; //consola js
        console.log(newCharacter);
        //actualiza la variable del store
        setStore({ characters: newCharacter }); //jsx
      },
      removeCharacter(uid, name) {
        const store = getStore();
        const updatedCharacter = store.characters.filter(
          (itm) => itm.uid !== uid
        );
        setStore({ characters: updatedCharacter });
      },
    },
  };
};

export default getState;
