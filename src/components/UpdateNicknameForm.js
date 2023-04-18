import React, { useState } from "react";

function UpdateNicknameForm ({ playersObjects, setPlayersObjects }) {
    let [editId, setEditId] = useState('')
    let [editNickname, setEditNickname] = useState('')    

    let handleEditNickname = (e) => setEditNickname(e.target.value)
    let handleEditId = (e) => setEditId(e.target.value)

    function handlePatch(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/nicknames/${editId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: editNickname,
          }),
        })
          .then((r) => r.json())
          .then((data) => setPlayersObjects(data))
          .then(() => {
            setEditId("");
            setEditNickname("");
          });
      }
      
      

        let handleSelectPlayer = () => playersObjects.map((player) => {
            return player.nicknames.map(name => <option value={name.id}>{name.nickname}</option>)
        })

        return(
            <form onSubmit={handlePatch}>
                <label>Edit a nickname</label>
                <select onChange={handleEditId}>
                    <option value=''>Select a nickname to edit</option>
                    {handleSelectPlayer()}
                </select>
                <input type="TEXT" value={editNickname} onChange={handleEditNickname}placeholder="Corrected Nickname"></input>                    <button type='submit'>Submit</button>
            </form>
        )
    }   

export default UpdateNicknameForm