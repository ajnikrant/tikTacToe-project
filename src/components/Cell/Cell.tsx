import { useState } from "react";
import React from 'react';

export function Cell({player, setPlayer}) {
const [cellColor, setCellColor] = useState (true)
const [playerMark, setPlayerMark] = useState (" ")

  function handleCellClick(cellColor:boolean){
    setCellColor(cellColor => !cellColor)

    setPlayer(player => !player)
    handlePlayerChoice(player)
  }

  function handlePlayerChoice(player){
    if (player === true) {
      setPlayerMark("X")
    }
    else if (player === false){
      setPlayerMark("O")}
  }

  const playerColor = player? 'p-4 h-20 w-20 flex justify-center border border-blue-900 bg-blue-200' : 'p-4 h-20 w-20 flex justify-center border border-blue-900 bg-green-200'

  return (


    <div>
        <h2 className={cellColor ? 'p-4 h-20 w-20 flex justify-center border border-blue-900' : playerColor} 
          onClick = {()=>handleCellClick(cellColor)}> 
            {playerMark}
        </h2>
    </div>
  );
}
