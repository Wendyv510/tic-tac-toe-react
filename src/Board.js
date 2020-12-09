import React from 'react';

const Board = ({ gameBoard, canPlay, handleClick }) => {

    return <div id="board">
        {gameBoard.map((cell,index) => (
            <div 
                key={index} 
                className="cell" 
                onClick={() => canPlay ? handleClick(index) : null}
            >
                <p>{cell}</p>
            </div>
        ))}
    </div>
}

export default Board; 