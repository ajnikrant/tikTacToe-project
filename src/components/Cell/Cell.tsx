import { useState } from "react";
import React from 'react';

export function Cell({player, setPlayer}) {
const [cellColor, setCellColor] = useState (true)

  function handleCellClick(cellColor:boolean){
    setCellColor(cellColor => !cellColor)

    setPlayer(player => !player)
    if (player ===true) {
      console.log ("true X")
    }
    else {console.log("false O")}
  }

  return (


    <div>
        <h2 className={cellColor ? 'p-4 flex justify-center h-auto border border-blue-900':'p-4 flex justify-center h-auto border border-blue-900 bg-blue-200'} onClick = {()=>handleCellClick(cellColor)}>X</h2>
    </div>
  );
}
