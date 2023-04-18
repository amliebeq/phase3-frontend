import React, { useState } from "react";

function NewNicknameForm ({ playersObjects, setPlayersObjects }) {
    let [newNickname, setNewNickname] = useState('')
    let [athleteId, setAthleteId] = useState('nil')

    let handleNewNickname = (e) => setNewNickname(e.target.value)
    let handleAthleteId = (e) => setAthleteId(e.target.value)
    
    function handleNicknameSubmit (e) {
        e.preventDefault()
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
        .then((data) => {
            setPlayersObjects(data);
            setNewNickname('');
            setAthleteId('nil');
        });
    }

    let handleSelect = () => playersObjects.map(player => <option key={player.id} value={player.id}>{player.name}</option>)
    
    return (
    <form onSubmit={handleNicknameSubmit}>
        <label>Add a new nickname!</label>
        <select onChange={handleAthleteId} value={athleteId}>
            <option value='nil'>Select a player to add a new nickname</option>
            {handleSelect()}
        </select>
        <input type="TEXT" value={newNickname} onChange={handleNewNickname} placeholder="Nickname"/>                    
        <button type="SUBMIT">Add new nickname</button>
    </form>
    )
}

export default NewNicknameForm
