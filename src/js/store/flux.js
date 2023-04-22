const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      addToFavorites: (uid, name) => {
        const store = getStore();
        const characterExists = store.characters.some(
          (character) => character.uid === uid
        );

        if (characterExists) {
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

          setStore({ characters: newCharacter });
        }
      },
      
      removeFromFavorites: (uid, name) => {
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
