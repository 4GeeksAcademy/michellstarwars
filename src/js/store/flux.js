import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { //VARIABLES GENERALES// //el setStore cambiara el valor de estos valores// Asi es como se declaran variables en Flux// 
			character: [],
			planets: [],
			vehicles: [],

			//VARIABLES ESPECIFICAS//
			char: [],
			planet: [],
			vehicle: []

		},
		actions: { //Metodo GETcharacter// //FUNCIONES GENERALES//
			getCharacter: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/people/")
					if (response.data) {
						console.log(response.data)
						setStore({ character: response.data.results })
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},

			getPlanets: async () => { //Metodo GETplanets//
				try {
					const response = await axios.get("https://www.swapi.tech/api/planets/")
					if (response.data) {
						console.log(response.data)
						setStore({ planets: response.data.results })

					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			},

			getVehicles: async () => { //Metodo GETvehicles//
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
						setStore({char: response.data.result.properties})
					}
				} catch (error) {
					console.log("ha habido un error" + error)
				}
			}
		}

	};
};

export default getState;
