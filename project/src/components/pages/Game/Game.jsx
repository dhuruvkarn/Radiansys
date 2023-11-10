import React, { useState } from 'react';
import "./game.css";
import Tile from './Tile';

const Game = () => {
    const [tiles, setTiles] = useState(Array(4).fill(false));

    const handleClick = (id) => {
        const newTiles = [...tiles];
        const selectedTiles = newTiles.filter((tile) => tile === true);

        if (newTiles[id]) {
            newTiles[id] = false;
        } else if (selectedTiles.length < 2) {
            newTiles[id] = true;
        } else {
            const firstSelected = newTiles.indexOf(true);
            newTiles[firstSelected] = false;
            newTiles[id] = true;
        }

        setTiles(newTiles);
    };

    return (
        <div className="container">
            {tiles.map((elem, index) => (
                <Tile
                    key={index}
                    id={index}
                    selected={elem}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Game;
