import React, { useEffect } from "react";
import { Context } from "../store/appContext"
import Card from "../component/Card";
import { useContext } from "react";

function Planets() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPlanets();
    }, [])

    return (
        <div>
            <h2 className="tittle">PLANETS</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {store.planets.map((planet) => (
                    <div key={planet.uid}>
                        <Card name={planet.name}
                            uid={planet.uid}
                            type={"planets"}>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planets;







