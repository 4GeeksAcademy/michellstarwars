import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

function PlanetsUid() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPlanet(uid);
    }, [actions, uid]);

    return (
        <div className="contenedor">
            <h1>{store.planet.name}</h1>
            <p><strong>UID:</strong> {store.planet.uid}</p>
            <p><strong>Clima:</strong> {store.planet.climate}</p>
            <p><strong>Diámetro:</strong> {store.planet.diameter}</p>
            <p><strong>Gravedad:</strong> {store.planet.gravity}</p>
            <p><strong>Terreno:</strong> {store.planet.terrain}</p>
            <p><strong>Población:</strong> {store.planet.population}</p>
        </div>

    );
}
export default PlanetsUid;