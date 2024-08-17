import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

function CharacterUid() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getChar(uid);
    }, [actions, uid]);

    return (
        <div>
            <h1>{store.char.name}</h1>
            <p><strong>Birth Year:</strong> {store.char.birth_year}</p>
            <p><strong>Eye Color:</strong> {store.char.eye_color}</p>
            <p><strong>Gender:</strong> {store.char.gender}</p>
            <p><strong>Hair Color:</strong> {store.char.hair_color}</p>
            <p><strong>Height:</strong> {store.char.height} cm</p>
            <p><strong>Homeworld:</strong> {store.char.homeworld}</p>
            <p><strong>Mass:</strong> {store.char.mass} kg</p>
            <p><strong>Skin Color:</strong> {store.char.skin_color}</p>
            <p><strong>URL:</strong> <a href={store.char.url}>{store.char.url}</a></p>
        </div>
    );
}

export default CharacterUid;
