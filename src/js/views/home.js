import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";


export const Home = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	// useEffect(() => { esto es para hacer la llamada de los datos, pero esto va en la view de cada una
	// 	actions.getCharacter();
	// 	actions.getPlanets();
	// 	actions.getVehicles();
	// }, []);

	return (
		<>
			<div className="text-center m-2">
				<button type="button" className="btn btn-success mx-2" onClick={() => navigate("/character")}>
					go to characters
				</button>

				<button type="button" className="btn btn-success" onClick={() => navigate("/planets")}>
					go to planets
				</button>
				<button type="button" className="btn btn-success mx-2" onClick={() => navigate("/vehicles")}>
					go to vehicles
				</button>
			</div>
		</>
	)
}


