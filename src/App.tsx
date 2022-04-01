import React, { useEffect, useState } from 'react';
import {Board} from './components/Board';
import {PlayerX} from './components/PlayerX';
import {PlayerO} from './components/PlayerO';

function App() {
  const [player, setPlayer] = useState("X")

  const [playingBoard, setPlayingBoard] = useState([['','',''],['','',''],['','','']])

  function handleClick(cellIndex, rowIndex) {
      //if the cell is empty, put an x or o in it
      let b = [...playingBoard]
      if (b[rowIndex][cellIndex] === ''){
        b[rowIndex][cellIndex] = player
        setPlayingBoard(b)
        player === "X" ? setPlayer("O") : setPlayer("X")
      }
  }

  return (
    <div className='flex justify-center pt-14 space-x-8'>
      <PlayerX player={player}/>
      {/* <Board player={player} setPlayer={setPlayer}/> */}
      {playingBoard.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div className="h-14 w-14 border border-solid flex justify-center items-center" onClick={() => handleClick(cellIndex, rowIndex)} key={cellIndex}>
                  {cell}
                </div>
              )
            })}
          </div>
        )
      })}
      <PlayerO player={player}/>
    </div>
  );
}

export default App;
