import React, {Component} from 'react' 
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: ["","","","","","","","",""]
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Tic-Tac-Toe 
      </header>
    <div id="board">
      {this.state.board.map((cell) =>
        <p className="cell">{cell}</p> )}
    </div>
    </div>
  );
}
}

export default App;
