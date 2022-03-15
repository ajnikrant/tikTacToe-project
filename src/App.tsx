import React, { useEffect, useState } from 'react';
import {Board} from './components/Board';
import {PlayerX} from './components/PlayerX';
import {PlayerO} from './components/PlayerO';

function App() {
  const [player, setPlayer] = useState(true)

  useEffect(()=>{
    if (player ===true) {
      console.log ("true APP")
    }
    else {console.log("false APP")}
},[player]);


  return (
    <div className='flex justify-center pt-14 space-x-8'>
      <PlayerX player={player}/>
      <Board player={player} setPlayer={setPlayer}/>
      <PlayerO player={player}/>
    </div>
  );
}

export default App;
