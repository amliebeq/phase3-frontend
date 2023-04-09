import React, { useState } from "react";

function Form ({ playersObjects, setPlayersObjects }) {
    let [name, setName] = useState('')
    let [sport, setSport] = useState('')
    let [reference, setReference] = useState('')
    let [id, setId] = useState('')
    let [newNickname, setNewNickname] = useState('')
    let [athleteId, setAthleteId] = useState('')
    let [editId, setEditId] = useState('')
    let [editNickname, setEditNickname] = useState('')

    let handleNameChange = (e) => setName(e.target.value)
    let handleSportChange = (e) => setSport(e.target.value)
    let handleReferenceChange = (e) => setReference(e.target.value)
    let handleIdChange = (e) => setId(e.target.value)
    let handleNewNickname = (e) => setNewNickname(e.target.value)
    let handleAthleteId = (e) => setAthleteId(e.target.value)
    let handleEditNickname = (e) => setEditNickname(e.target.value)
    let handleEditId = (e) => setEditId(e.target.value)

    function handleSubmit(e) {
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
        }

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

        function handleDelete() {
            fetch (`http://localhost:9292/nicknames/${id}`, {
                method: 'DELETE',
            })
        }

        function handlePatch() {
            fetch (`http://localhost:9292/nicknames/${editId}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nickname: editNickname,
                }),              
            })
            .then((r) => r.json())  
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add a new player!</label>
                    <input type="Text" value={name} onChange={handleNameChange} placeholder="Name"/>
                    <input type="Text" value={sport} onChange={handleSportChange} placeholder="Sport"/>
                    <input type="Text" value={reference} onChange={handleReferenceChange} placeholder="Refernce page URL"/>
                    <button type='submit'>submit</button>
                </form>
                <form onSubmit={handleNicknameSubmit}>
                    <label>Add a new nickname!</label>
                    <input type="number" min="0" value={athleteId} onChange={handleAthleteId} placeholder="Player id"/>
                    <input type="TEXT" value={newNickname} onChange={handleNewNickname} placeholder="Nickname"/>                    
                    <button type="SUBMIT">Add new nickname</button>
                </form>
                <form onSubmit={handleDelete}>
                    <label>Delete a nickname</label>
                    <input type="number" min="0" value={id} onChange={handleIdChange} placeholder="Nickname ID"/>
                    <button type='submit'>Delete</button>
                </form>
                <form onSubmit={handlePatch}>
                    <label>Edit a nickname</label>
                    <input type="number" min="0" value={editId} onChange={handleEditId} placeholder="Nickname ID"/>
                    <input type="TEXT" value={editNickname} onChange={handleEditNickname}placeholder="Corrected Nickname"></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }   

export default Form