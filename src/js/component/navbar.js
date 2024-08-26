// Navbar.js
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <nav className="container navbar bg-dark mb-3 p-2">
            <Link to="/">
                <img
                    className="navbar-logo"
                    src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                />
            </Link>

            <div className="text-center m-2">
                <button type="button" className="btn btn-outline-warning" onClick={() => navigate("/character")}>
                    go to characters
                </button>

                <button type="button" className="btn btn-outline-warning" onClick={() => navigate("/planets")}>
                    go to planets
                </button>
                <button type="button" className="btn btn-outline-warning" onClick={() => navigate("/vehicles")}>
                    go to vehicles
                </button>
            </div>

            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu"> {/*DROPDOWN FAVORITOS*/}
                    {store.favorites.length === 0 ? (
                        <li><span className="dropdown-item">No favorites yet</span></li>
                    ) : (
                        store.favorites.map((favorite, index) => (
                            <li key={index} className="d-flex align-items-center justify-content-between">
                                <a className="dropdown-item" href="#" onClick={() => navigate(`/${favorite.type}/${favorite.uid}`)}>
                                    {favorite.name}
                                </a>
                                <button 
                                    className="btn btn-outline-danger btn-sm" 
                                    onClick={() => actions.removeFavorite(favorite)}
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};
