import React from "react";

function Filter({ onPlayerChange }) {

    return(
        <form>
            <label>Find your favorite player here!</label>
            <input type="Text" placeholder="Find your favorite player(s) by name"  onChange={onPlayerChange}/>
        </form>
    )

}

export default Filter