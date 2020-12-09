import React, {Component} from 'react' 
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
      players: {
        one:
        two:
      }
    }
  }

  handleClick = (cellIndex) => {
    const cloneBoard = [...this.state.board]
    cloneBoard[cellIndex] = "X" 
    this.setState(() => ({
        board: cloneBoard
    }))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        Tic-Tac-Toe 
      </header>
    <div id="board">
      {this.state.board.map((cell,index) =>
        <p key={index} className="cell" onClick= {() => this.handleClick(index)}>{cell}</p> )}
    </div>
    </div>
  );
}
}

export default App;
