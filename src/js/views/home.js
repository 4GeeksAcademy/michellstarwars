import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";


export const Home = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	return (
		<>
			{/* <div className="text-center m-2">
				<button type="button" className="btn btn-outline-warning" onClick={() => navigate("/character")}>
					go to characters
				</button>

				<button type="button" className="btn btn-outline-warning" onClick={() => navigate("/planets")}>
					go to planets
				</button>
				<button type="button" className="btn btn-outline-warning" onClick={() => navigate("/vehicles")}>
					go to vehicles
				</button>
			</div> */}
		</>
	)
}


