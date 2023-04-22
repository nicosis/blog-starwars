const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [], //agrero una propiedad donde voy a almacenar los characters favoritos
    },
    actions: {
      addCharacter: (uid, name) => {
        const store = getStore();
        const characterExists = store.characters.some(
          (character) => character.uid === uid
        );

        if (characterExists) {
          console.log("El personaje ya está en la lista de favoritos");
          const updatedCharacter = store.characters.filter(
            (itm) => itm.uid !== uid
          );
          setStore({ characters: updatedCharacter });
          return;
        } else {
          const newCharacter = [
            ...store.characters,
            { uid, name, favorite: true },
          ];
          console.log("add character:", newCharacter);
          //actualiza la variable del store
          setStore({ characters: newCharacter });
        }
      },
      removeCharacter(uid, name) {
        const store = getStore();
        const updatedCharacter = store.characters.filter(
          (itm) => itm.uid !== uid
        );
        setStore({ characters: updatedCharacter });
      },
      // addRemoveFavorites(uid, name) {
      // const store=getState()
      // if ()
      // },
    },
  };
};

export default getState;
