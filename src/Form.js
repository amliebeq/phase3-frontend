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
                    <label>name</label>
                    <input type="Text" value={name} onChange={handleNameChange} />
                    <label>Sport</label>
                    <input type="Text" value={sport} onChange={handleSportChange} />
                    <label>Refernce page URL</label>
                    <input type="Text" value={reference} onChange={handleReferenceChange} />
                    <button type='submit'>submit</button>
                </form>
                <form onSubmit={handleNicknameSubmit}>
                    <label>Add the ID of the player with the new nickname</label>
                    <input type="TEXT" value={athleteId} onChange={handleAthleteId} />
                    <label>Add a new nickname here</label>
                    <input type="TEXT" value={newNickname} onChange={handleNewNickname} />                    
                    <button type="SUBMIT">Add new nickname</button>
                </form>
                <form onSubmit={handleDelete}>
                    <label>Delet a nickname here using hte nickname id</label>
                    <input type="Text" value={id} onChange={handleIdChange} />
                    <button type='submit'>Delete</button>
                </form>
                <form onSubmit={handlePatch}>
                    <label>Add the ID of the nickname you would like to edit</label>
                    <input type="TEXT" value={editId} onChange={handleEditId} />
                    <label>Add the corrected nickname</label>
                    <input type="TEXT" value={editNickname} onChange={handleEditNickname}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }   

export default Form