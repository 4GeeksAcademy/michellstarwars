import React from "react";
import { useNavigate } from "react-router";

const Card = ({ name, uid, type }) => {
    const navigate = useNavigate()
    return (
        <div className="card shadow-sm" style={{ width: "18rem", margin: "10px" }}>
            <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={`${name}'s avatar`}
                onClick={() => navigate(`/${type}/${uid}`)}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                {/* <p className="card-text">
                    <strong>Gender:</strong> {gender} <br />
                    <strong>Eye Color:</strong> {eye_color} <br />
                    <strong>Hair Color:</strong> {hair_color}
                </p> */}
                <div className="d-flex justify-content-between" onClick={() => navigate(`${type}/${uid}`)}>
                    <a href="#" className="btn btn-primary">
                        Learn more
                    </a>
                    <button className="btn btn-outline-danger">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
