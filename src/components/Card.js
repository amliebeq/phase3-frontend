import React from "react";

function Card({ id, name, nicknames, reference, sport }) {
    
    let nicknameList = nicknames = undefined ? <p>No nicknames added yet</p> : nicknames.map(name => {
        return(
    <p className="nickname">{name.nickname}</p>
        )
    }) 

    return(        
    <div className="card">
        <h2>{name}</h2>
        <p>{sport}</p>
        <a href={reference}>More info</a>
        <p>Nicknames</p>
        {nicknameList}
    </div>
    )
}

export default Card