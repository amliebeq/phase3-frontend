import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Form from "./Form";

function Main({ playersObjects, setPlayersObjects }) {
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
            <Form playersObjects = {playersObjects} setPlayersObjects={setPlayersObjects}/>
            {playersList}
        </div>
    )

}

export default Main