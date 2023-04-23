const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      addToFavorites: (uid, name) => {
        const store = getStore();
        const characterExists = store.characters.some(
          (character) => character.uid === uid && character.name === name
        );
        console.log(characterExists);
        console.log("funky store", store);

        if (characterExists) {
          const updatedCharacter = store.characters.filter(
            (itm) => itm.uid !== uid && itm.name !== name
          );
          setStore({ characters: updatedCharacter });
          return;
        } else {
          const newCharacter = [
            ...store.characters,
            { uid, name, favorite: true }, //preguntar
          ];
          setStore({ characters: newCharacter });
        }
      },
      removeFromFavorites: (uid, name) => {
        const store = getStore();
        const updatedCharacter = store.characters.filter(
          (itm) => itm.uid !== uid && itm.name !== name
        );
        setStore({ characters: updatedCharacter });
      },
    },
  };
};

export default getState;
