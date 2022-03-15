import { useState } from "react";
import React from 'react';

export function Cell() {
const [cellColor, setCellColor] = useState (true)

  function handleCellClick(cellColor:boolean){
    setCellColor(cellColor => !cellColor)
  }
  return (


    <div>
        <h2 className={cellColor ? 'p-4 flex justify-center h-auto border border-blue-900':'p-4 flex justify-center h-auto border border-blue-900 bg-blue-200'} onClick = {() => handleCellClick(cellColor)}>X</h2>
    </div>
  );
}
