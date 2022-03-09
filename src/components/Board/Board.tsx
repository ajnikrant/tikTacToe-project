import React from 'react';
import { Row } from '../Row'
 
export function Board() {

    // function rowMapper(n: number) {
    //     for (let i=0; i<n; i++){
    //        <Row key={i} />
    //         console.log(i)
    //       }
    // }

  return (
    <div className='flex flex-col'>
        <h2>THIS IS THE BOARD</h2>
        {/* <div>{ rowMapper(3) }</div> */}
        <div><Row /></div>
        <div><Row /></div>
        <div><Row /></div>
    </div>
  );
}