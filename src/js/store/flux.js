import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { //VARIABLES GENERALES//  
			character: [],
			planets: [],
			vehicles: [],

			//VARIABLES ESPECIFICAS//
			char: [],
			planet: [],
			vehicle: [],
			favorites: []
		},

		//FUNCIONES GENERALES//
		actions: {  //Metodo GETcharacter//
			getCharacter: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/people/")
					if (response.data) {
						setStore({ character: response.data.results })
						console.log(response.data)
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},
			//GETplanets//
			getPlanets: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/planets/")
					if (response.data) {
						console.log(response.data)
						setStore({ planets: response.data.results })
						console.log(response.data)
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},
			//GETvehicles//
			getVehicles: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/vehicles/")
					if (response.data) {
						console.log(response.data)
						setStore({ vehicles: response.data.results })
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},

			//FUNCIONES ESPECIFICAS:
			getChar: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/people/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ char: response.data.result.properties })
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},
			getPlanet: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/planets/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ planet: response.data.result.properties })
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},
			getVehicle: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/vehicles/${uid}`)
					if (response.data) {
						console.log(response.data)
						setStore({ vehicle: response.data.result.properties })
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},
//ADD FAV
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

//DEL FAV
			removeFavorite: (item) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.uid !== item.uid)
                });
            }
		}

	}
};

export default getState;
