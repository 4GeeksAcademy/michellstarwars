import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

function VehiclesUid() {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getVehicle(uid);
    }, [actions, uid]);

    return (
        <div className="contenedor">
            <h1>{store.vehicle.name}</h1>
            <p><strong>UID:</strong> {store.vehicle.uid}</p>
            <p><strong>Cargo Capacity:</strong> {store.vehicle.cargo_capacity}</p>
            <p><strong>Consumables:</strong> {store.vehicle.consumables}</p>
            <p><strong>Cost in Credits:</strong> {store.vehicle.cost_in_credits}</p>
            <p><strong>Created:</strong> {store.vehicle.created}</p>
            <p><strong>Crew:</strong> {store.vehicle.crew}</p>
            <p><strong>Model:</strong> {store.vehicle.model}</p>
            <p><strong>Edited:</strong> {store.vehicle.edited}</p>
            <p><strong>Manufacturer:</strong> {store.vehicle.manufacturer}</p>
            <p><strong>Passengers:</strong> {store.vehicle.passengers}</p>
            <p><strong>Max Atmosphering Speed:</strong> {store.vehicle.max_atmosphering_speed}</p>
        </div>

    );
}
export default VehiclesUid;