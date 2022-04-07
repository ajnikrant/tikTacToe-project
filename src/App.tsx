import React, { useEffect, useState } from 'react';

function App() {
  const [player, setPlayer] = useState("X")

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
      console.log("WINNER!")
    }
    //if straight left to right

    //if diagonal one way

    //if diagonal other way
  }

  // useEffect(()=> {
  //   checkWinStatus()
  // }, [playingBoard])

  return (
    <div className='flex justify-center pt-14 space-x-8'>
      <div className={player === "O" ? 'border border-solid': 'border border-solid bg-green-400'}>
            <h2>PLAYER X</h2>
      </div>

      {playingBoard.map((row, rowIndex) => {
        return (
          <div className='flex flex-col justify-center items-center' key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div className="h-14 w-14 border border-solid flex justify-center items-center" onClick={() => handleClick(cellIndex, rowIndex)} key={cellIndex}>
                  {/* {rowIndex}{cellIndex} */}
                  {cell}
                </div>
              )
            })}
          </div>
        )
      })}
          <div className={player === "X" ?  'border border-solid': 'border border-solid bg-green-400'}>
            <h2>PLAYER O</h2>
          </div>
    </div>
  );
}

export default App;
