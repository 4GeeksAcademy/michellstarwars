import React, { useEffect } from "react";
import { Context } from "../store/appContext"
import Card from "../component/Card";
import { useContext } from "react";

function Vehicles() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getVehicles();
    }, [])

    return (
        <div>
            <h2 className="tittle">VEHICLES</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {store.vehicles.map((vehicle) => (
                    <div key={vehicle.uid}>
                        <Card name={vehicle.name}
                            uid={vehicle.uid}
                            type={"vehicles"}>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles;







