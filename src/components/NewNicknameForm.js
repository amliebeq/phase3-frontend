import React, { useState } from "react";

function NewNicknameForm ({ playersObjects }) {
    let [newNickname, setNewNickname] = useState('')
    let [athleteId, setAthleteId] = useState('')

    let handleNewNickname = (e) => setNewNickname(e.target.value)
    let handleAthleteId = (e) => setAthleteId(e.target.value)
    
    function handleNicknameSubmit (e) {
        let data = {
            athlete_id: athleteId,
            nickname: newNickname
        }
        fetch('http://localhost:9292/nicknames', {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((r) => r.json())          
    }

    let handleSelect = () => playersObjects.map(player => <option value={player.id}>{player.name}</option>)
    
    return (
    <form onSubmit={handleNicknameSubmit}>
        <label>Add a new nickname!</label>
        <select onChange={handleAthleteId}>
            <option value='nil'>Select a player to add a new nickname</option>
            {handleSelect()}
        </select>
        <input type="TEXT" value={newNickname} onChange={handleNewNickname} placeholder="Nickname"/>                    
        <button type="SUBMIT">Add new nickname</button>
    </form>
    )

}

export default NewNicknameForm