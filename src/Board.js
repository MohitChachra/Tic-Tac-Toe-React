import React from 'react';

import './App.css';
import Box from './Box';
class Board extends React.Component{
  constructor(){
    super();
    let board = [];
    for(let i =0;i<3;i++){
      board.push(['','','']);
    }
    this.state = {
      board:board,
      turn:0,
      winner:'p'
    }
    this.updateBoard = this.updateBoard.bind(this);
  }
  updateBoard(row,col){
    let gameBoard = this.state.board;
    if(gameBoard[row][col]!=='' || this.state.winner!=='p'){
      return;
    }
    let turn = this.state.turn;
    if(this.state.turn === 0){
      gameBoard[row][col]='O';
      turn = 1;
    } else{
      gameBoard[row][col] = 'X';
      turn = 0;
    }
    this.setState({
      board:gameBoard,
      turn:turn,
    },
    ()=>{
      this.setState({
        winner:this.checkWinner(this.state.board)
      })
    }
    );

  }
  checkWinner(box){
    for(let i =0;i<3;i++){
      if(box[0][i] === box[1][i] && box[1][i] === box[2][i] && box[0][i] !== '' && box[1][i] !== '' && box[2][i] !== '')
        return this.state.turn === 1 ? 'O' : 'X';
    
    if(box[i][0] === box[i][1] && box[i][1] === box[i][2] && box[i][0] !== '' && box[i][1] !== '' && box[i][2] !== '')
        return this.state.turn === 1 ? 'O' : 'X';
    }
  
  if(box[0][0] === box[1][1] && box[1][1] === box[2][2] && box[0][0] !== '' && box[1][1] !== '' && box[2][2] !== '')
    return this.state.turn === 1 ? 'O' : 'X';
  
  if(box[0][2] === box[1][1] && box[1][1] === box[2][0] && box[0][2] !== '' && box[1][1] !== '' && box[2][0] !== '')
    return this.state.turn === 1 ? 'O' : 'X';
  
    let count =0;
  for(let i = 0;i<3;i++){
    for(let j=0;j<3;j++){
      if(box[i][j]!==''){
        count++;
      }
    }
  }
    if(count == 9) return 'none';
  return 'p';
  }
  render(){
    return(
      <div className='board'>
        {this.state.winner==='p'?<h1>Tic-Tac-Toe</h1>:<h1>Winner is {this.state.winner}</h1>}
        <div className='box_container'>
          {
            this.state.board.map((arr,i)=>{
              return arr.map((ele,j)=>{
                return <Box value={ele} key={`${i}-${j}`} id={`${i}-${j}`} updateBoard ={this.updateBoard}/>
              })
            })
          }
        </div>

      </div>
    )
  }
}

export default Board;
