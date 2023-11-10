import React from 'react'

function Tile({ id, selected, handleClick }) {
    const tileColor = selected ? 'blue' : 'red';
    return (
        <div
            className="tile"
            style={{ backgroundColor: tileColor }}
            onClick={() => handleClick(id)}
        ></div>
    );
}

export default Tile

