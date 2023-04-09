import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

function Main({ playersObjects }) {
    let [player, setPlayer] = useState('')
    
    function handlePlayerChange (e) {
        setPlayer(e.target.value.toLowerCase())
    }

    let filterPlayer = playersObjects.filter(person => person.name.toLowerCase().includes(player))
    
    let playersList = filterPlayer.map((player) => {
        return(
        <Card key={player.id} id={player.id} name={player.name} sport={player.sport} reference={player.reference_url} nicknames={player.nicknames} />
        )
    })
    
    return (
        <div>
            <Filter onPlayerChange={handlePlayerChange}/>
            {playersList}
        </div>
    )

}

export default Main