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
      declareWinner()
  }


  function declareWinner(){

    const winnerX = (cell:string) => cell === "X"
    const winnerO = (cell:string) => cell === "O"

    let copy = [['','',''],['','',''],['','','']]

    //loop over first dimension of playingboard
    //vertical win logic
    for(let i = 0; i < playingBoard.length; i++) {
      let logicX= playingBoard[i].every(winnerX)
      let logicO= playingBoard[i].every(winnerO)
      if (logicX || logicO){ setVictory(true) }
     }
    //transpose playingboard into copy
    for (let i=0; i<copy.length; i++){
      for(let j=0; j<copy[i].length; j++){
        copy[i][j] = playingBoard[j][i]
      }
    }
    //loop over first dimension of copy 
    //horizontal win logic
    for(let i = 0; i < copy.length; i++) {
      let logicX= copy[i].every(winnerX)
      let logicO= copy[i].every(winnerO)
      if (logicX || logicO){ setVictory(true) }
    }

    //diagonal win logic  
    
    playingBoard.map((row, rowIndex) => (
      row.map((cell, cellIndex) => {
        if (playingBoard[rowIndex][cellIndex] !== '' && playingBoard[rowIndex][cellIndex] === playingBoard[rowIndex+1][cellIndex+1] && playingBoard[rowIndex][cellIndex] === playingBoard[rowIndex+2][cellIndex+2]){
           setVictory(true)
          // console.log("DIAG")
         }
         else if (playingBoard[rowIndex][cellIndex] !== '' && playingBoard[rowIndex][cellIndex] === playingBoard[rowIndex+1][cellIndex-1] && playingBoard[rowIndex][cellIndex] === playingBoard[rowIndex+2][cellIndex-2]){
          setVictory(true)
         }
      }) 
     ))
  }

  function handlePlayAgain(){
    setPlayingBoard([['','',''],['','',''],['','','']])
    setVictory(false)
    setPlayer("X")
  }

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
          {victory ? <div className='absolute flex flex-col justify-center items-center bg-amber-200 shadow-sm shadow-yellow-100 rounded-xl p-12 space-y-4'>
                        <h1> Congrats Player {player === "X" ? "O" : "X"}, You won!</h1> 
                        <button onClick={handlePlayAgain} className='h-4 bg-blue-600 text-xs p-2 rounded-xl hover:bg-blue-500'> <p className='-mt-2'>Play Again</p></button>
                      </div>
                        : null}
    </div>
  );
}

export default App;
