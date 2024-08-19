import React, { useEffect } from "react";
import { Context } from "../store/appContext"
import Card from "../component/Card";
import { useContext } from "react";

function Character() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getCharacter();
    }, [])

    return (
        <div>
            <h2 className="tittle">CHARACTERS</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {store.character.map((charact) => (
                    <div key={charact.uid}>
                        <Card name={charact.name}
                            uid={charact.uid}
                            type={"character"}>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Character;







