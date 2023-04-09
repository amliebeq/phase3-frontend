import React from "react";

function Card({ id, name, nicknames, reference, sport }) {
    
    let nicknameList = nicknames.map(name => <p>{name.nickname}</p>) 

    return(        
    <div>
        <h2>{name}</h2>
        <p>{id}</p>
        <p>{sport}</p>
        <a href={reference}>More info</a>
        {nicknameList}
    </div>
    )
}

export default Card