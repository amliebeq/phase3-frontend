import React, { useState } from "react";

function Form ({ playersObjects, setPlayersObjects }) {
    let [name, setName] = useState('')
    let [sport, setSport] = useState('')
    let [reference, setReference] = useState('')

    let handleNameChange = (e) => setName(e.target.value)
    let handleSportChange = (e) => setSport(e.target.value)
    let handleReferenceChange = (e) => setReference(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: name,
            sport: sport,
            reference_url: reference,
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
        setReference('')
        setSport('')
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>name</label>
                    <input type="Text" value={name} onChange={handleNameChange} />
                    <label>Sport</label>
                    <input type="Text" value={sport} onChange={handleSportChange} />
                    <label>Refernce page URL</label>
                    <input type="Text" value={reference} onChange={handleReferenceChange} />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }   

export default Form