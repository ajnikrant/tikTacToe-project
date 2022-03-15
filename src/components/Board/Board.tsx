import React from 'react';
import { Row } from '../Row'
 
export function Board({player, setPlayer}) {


  return (
    <div className='flex flex-col border border-solid justify-center'>
        <Row player={player} setPlayer={setPlayer} />
        <Row player={player} setPlayer={setPlayer} />
        <Row player={player} setPlayer={setPlayer} />
    </div>
  );
}