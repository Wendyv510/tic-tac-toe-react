import React, {Component} from 'react'
import Board from './Board';
import Message from './Message'  
import './App.css';

const WIN_CONDITIONS = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: ["","","","","","","","",""],
      currentToken: "X",
      turn: 0,
      canPlay: true, 
    };
  }

  checkForWinner = (board) => {
    let hasWon = false; 

    WIN_CONDITIONS.forEach(winCombo => {
      const [firstIndex, secondIndex, thirdIndex] = winCombo;
      const firstBoardPos = board[firstIndex];
      const secondBoardPos = board[secondIndex];
      const thirdBoardPos = board[thirdIndex];

      if (firstBoardPos === "" || secondBoardPos === "" || thirdBoardPos === ""){
        return 
      }

      const winCheckArray = [firstBoardPos, secondBoardPos, thirdBoardPos]

      if (firstBoardPos === "X" && !winCheckArray.includes("0")){
        hasWon = true 
      }
      
      if (firstBoardPos === "O" && !winCheckArray.includes("X")){
        hasWon = true 
      }
    })
    return hasWon
  }

  handleClick = (cellIndex) => {
    const { board, currentToken, turn } = this.state; 

    if (board[cellIndex] !== ""){
      return 
    }

    const cloneBoard = [...board]
    cloneBoard[cellIndex] = currentToken;
    
    if (turn >= 4 && this.checkForWinner(cloneBoard)){
    this.setState(() => ({
        board: cloneBoard,
        canPlay: false 
    }))
    return 
  }

  this.setState(() => ({
    board: cloneBoard, 
    currentToken: currentToken === "X" ? "O" : "X", 
    turn: turn + 1 
  }))
  }

  render(){
    const {board, canPlay, currentToken } = this.state 
  return (
    <div className="App">
      <header className="App-header">
        Tic-Tac-Toe 
      </header>
    {!canPlay ? <Message winnerToken ={currentToken}/> : null}
    <Board 
      gameBoard={board} 
      canPlay={canPlay}
      handleClick={this.handleClick}
    />
    </div>
  );
}
}

export default App;
