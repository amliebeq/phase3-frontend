import React, { useState } from "react";

function NewPlayerForm({ playersObjects, setPlayersObjects }) {
    let [name, setName] = useState('')
    let [sport, setSport] = useState('')
    let [reference, setReference] = useState('')
    let [originalNickname, setOriginalNickname] = useState('')

    let handleNameChange = (e) => setName(e.target.value)
    let handleSportChange = (e) => setSport(e.target.value)
    let handleReferenceChange = (e) => setReference(e.target.value)
    let handleOriginalNickname = (e) => setOriginalNickname(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: name,
            sport: sport,
            reference_url: reference,
            nickname: originalNickname,
        }
        fetch('http://localhost:9292/athletes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((newPlayer) => setPlayersObjects([...playersObjects, newPlayer]))
        setName('')
        setSport('')
        setReference('')
        setOriginalNickname('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>Add a new player!</label>
            <input type="Text" value={name} onChange={handleNameChange} placeholder="Name"/>
            <input type="Text" value={sport} onChange={handleSportChange} placeholder="Sport"/>
            <input type="Text" value={reference} onChange={handleReferenceChange} placeholder="Reference page URL"/>
            <input type="Text" value={originalNickname} onChange={handleOriginalNickname} placeholder="Nickname"/>
            <button type='submit'>submit</button>
        </form>
    )

}

export default NewPlayerForm