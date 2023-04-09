import React from "react";
import Card from "./Card";

function Main({ playersObjects }) {
    let playersList = playersObjects.map((player) => {
        return(
        <Card key={player.id} id={player.id} name={player.name} sport={player.sport} reference={player.reference_url} nicknames={player.nicknames} />
        )
    })
    
    return (
        <div>
            {playersList}
        </div>
    )

}

export default Main