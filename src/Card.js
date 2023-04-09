import React from "react";

function Card({ id, name, nicknames, reference, sport }) {
    
    let nicknameList = nicknames = undefined ? <p>No nicknames added yet</p> : nicknames.map(name => {
        return(
    <p className="nickname">{name.id}: {name.nickname}</p>
        )
    }) 

    return(        
    <div className="card">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>{sport}</p>
        <a href={reference}>More info</a>
        <p>Nicknames and ID's</p>
        {nicknameList}
    </div>
    )
}

export default Card