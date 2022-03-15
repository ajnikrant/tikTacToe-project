import React from 'react';
import { Cell } from '../Cell';

export function Row({player, setPlayer}) {

  return (
    <div className='flex flex-row justify-center'>
        <Cell player={player} setPlayer={setPlayer}/>
        <Cell player={player} setPlayer={setPlayer}/>
        <Cell player={player} setPlayer={setPlayer}/>
    </div>
  );
}
