import React, { useState } from "react";

function DeleteNickname ({ playersObjects, setPlayersObjects }) {
    let [id, setId] = useState('')

    let handleIdChange = (e) => setId(e.target.value)

    function handleDelete(e) {
        e.preventDefault()
        fetch (`http://localhost:9292/nicknames/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => setPlayersObjects(data))
        setId('nil')
    }

    let handleSelectPlayer = () => playersObjects.map((player) => {
        return player.nicknames.map(name => <option value={name.id}>{name.nickname}</option>)
    })

    return (
        <form onSubmit={handleDelete}>
            <label>Delete a nickname</label>
            <select onChange={handleIdChange}>
                <option value='nil'>Select a nickname to delete</option>
                {handleSelectPlayer()}
            </select>
            <button type='submit'>Delete</button>
        </form>
    )
}

export default DeleteNickname