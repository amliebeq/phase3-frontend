import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import NewPlayerForm from "./NewPlayerForm";
import NewNicknameForm from "./NewNicknameForm";
import DeleteNickname from "./DeleteNickname";
import UpdateNicknameForm from "./UpdateNicknameForm";

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
            <h1>Player Nickname Library</h1>
            <NewPlayerForm playersObjects = {playersObjects} setPlayersObjects={setPlayersObjects}/>
            <NewNicknameForm playersObjects = {playersObjects}/>
            <DeleteNickname playersObjects = {playersObjects}/>
            <UpdateNicknameForm playersObjects = {playersObjects}/>
            <Filter onPlayerChange={handlePlayerChange}/>
            <div className="card-container">{playersList}</div>
        </div>
    )

}

export default Main