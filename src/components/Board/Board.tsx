import React from 'react';
import { Row } from '../Row'
 
export function Board({player, setPlayer}) {


  return (
    <div className='flex flex-col border border-solid justify-center'>
        <h2>THIS IS THE BOARD</h2>
        {/* <div>{ rowMapper(3) }</div> */}
        <Row player={player} setPlayer={setPlayer} />
        <Row player={player} setPlayer={setPlayer} />
        <Row player={player} setPlayer={setPlayer} />
    </div>
  );
}