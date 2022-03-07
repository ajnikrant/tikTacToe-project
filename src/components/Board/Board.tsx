import React from 'react';
import { Row } from '../Row'
 
export function Board() {

    // const rowMapper = (n: integer) => {
    //     for (let i=0; i<n; i++){
    //         <Row key={i} />
    //     }
    // }
  return (
    <div>
        <h2>THIS IS THE BOARD</h2>
        {/* <div>{rowMapper(3)}</div> */}
        <div><Row /></div>
        <div><Row /></div>
        <div><Row /></div>
    </div>
  );
}