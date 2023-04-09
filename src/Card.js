import React from "react";

function Card({ id, name, nicknames, reference, sport }) {
    
    let nicknameList = nicknames = undefined ? <p>No nicknames added yet</p> : nicknames.map(name => {
        return(
    <p>{name.id}: {name.nickname}</p>
        )
    }) 

    return(        
    <div>
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