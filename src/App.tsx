import React, { useState } from 'react';

function App() {
  const [player, setPlayer] = useState("X")
  const [victory, setVictory] = useState(false)
  const [playingBoard, setPlayingBoard] = useState([['','',''],['','',''],['','','']])

  function handleClick(cellIndex:number, rowIndex:number) {
      let b = [...playingBoard]
      if (b[rowIndex][cellIndex] === ''){
        b[rowIndex][cellIndex] = player
        setPlayingBoard(b)
        player === "X" ? setPlayer("O") : setPlayer("X")
      };
      checkWinStatus(cellIndex, rowIndex)
  }

  function checkWinStatus(cellIndex:number, rowIndex:number){
    //if straight up and down 
    if (playingBoard[rowIndex][0] === playingBoard[rowIndex][1] && playingBoard[rowIndex][0] === playingBoard[rowIndex][2] ){
      setPlayingBoard([['','',''],['','',''],['','','']])
      setVictory(true)
    }
    //if straight left to right
    else if (playingBoard[0][cellIndex] === playingBoard[1][cellIndex] && playingBoard[0][cellIndex] === playingBoard[2][cellIndex] ){
      setPlayingBoard([['','',''],['','',''],['','','']])
      setVictory(true)
    }
    //if diagonal one way
    else if (playingBoard[0][0] === playingBoard[1][1] && playingBoard[0][0] === playingBoard[2][2] ){
    // else if (playingBoard[rowIndex-1][0] === playingBoard[rowIndex][1] && playingBoard[rowIndex-1][0] === playingBoard[rowIndex+1][2] ){
      if (playingBoard[1][1] !== ''){
        setPlayingBoard([['','',''],['','',''],['','','']])
        setVictory(true)
      }
    }
    //if diagonal other way
    else if (playingBoard[2][0] === playingBoard[1][1] && playingBoard[2][0] === playingBoard[0][2] ){
      if (playingBoard[1][1] !== ''){
        setPlayingBoard([['','',''],['','',''],['','','']])
        setVictory(true)  
      }
    }
  }  

  const winningTextBox = (
  <div>
    <div className='bg-black opacity-50'> </div>
    <h1 className='absolute flex justify-center items-center bg-lime-600 p-12'>Congrats, Player {player === "X" ? "O" : "X"}, You won!</h1>
  </div>
  )
  return (
    <div className='flex justify-center pt-14 space-x-8'>
      <div className={player === "O" ? 'border mr-8 border-solid': 'border mr-8 border-solid bg-green-600' } >
            <h2>PLAYER X</h2>
      </div>

      {playingBoard.map((row, rowIndex) => {
        return (
          <div className='flex flex-col justify-center items-center ' key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div className="h-14 w-14 border border-solid flex justify-center items-center cursor-pointer -ml-8" onClick={() => handleClick(cellIndex, rowIndex)} key={cellIndex}>
                  {cell}
                </div>
              )
            })}
          </div>
        )
      })}
          <div className={player === "X" ?  'border border-solid': 'border border-solid bg-green-600'}>
            <h2>PLAYER O</h2>
          </div>
          {victory ? <h1 className='absolute flex justify-center items-center bg-amber-200 drop-shadow-2xl drop-shadow-amber-500 rounded-xl p-12'>Congrats, Player {player === "X" ? "O" : "X"}, You won!</h1> : null}
    </div>
  );
}

export default App;
