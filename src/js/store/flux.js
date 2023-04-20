const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [] //agrero una propiedad donde voy a almacenar los characters favoritos
		},
		actions: {
			addCharacter(id, name) {
				// recuperar la amacen global
				const store = getStore()
				// crear nuevo caracter y añadirlo a la propiedad creada arriba
				const newCharacter = [...store.characters, {id, name}] //consola js

				console.log('actualizo character :', newCharacter);

				//actualiza la variable del store
				setStore({characters: newCharacter})  //jsx

			}
		}
	};
};

export default getState;
