import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

const Card = ({ name, uid, type }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    // VERIFICA SI EL ELEMENTO YA ES FAVORITO***********
    const isFavorite = store.favorites.some(fav => fav.uid === uid);
    const handleFavoriteClick = () => {
        const item = { name, uid, type };
        if (isFavorite) {
            actions.removeFavorite(item);
        } else {
            actions.addFavorite(item);
        }
    };////******
    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }} >
            <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={`${name}'s avatar`}
                onClick={() => navigate(`/${type}/${uid}`)}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <button onClick={() => navigate(`/${type}/${uid}`)} className="btn btn-primary">
                        Learn more
                    </button>
                    <button //BOTON FAVORITOS**********
                        className="btn btn-outline-danger"
                        onClick={handleFavoriteClick}>
                        <i className={`fa-solid ${isFavorite ? 'fa-heart' : 'fa-heart'}`} style={{ color: isFavorite ? 'red' : 'gray' }} ></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
