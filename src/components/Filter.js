import React from "react";

function Filter({ onPlayerChange }) {

    return(
        <form className='Filter'>
            <label>Find your favorite player by name!</label>
            <input type="Text" placeholder="Find your favorite player(s) by name"  onChange={onPlayerChange}/>
        </form>
    )

}

export default Filter