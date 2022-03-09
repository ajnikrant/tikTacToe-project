import React from 'react';
import { Cell } from '../Cell';

export function Row() {
  return (
    <div className='flex flex-row'>
        <Cell />
        <Cell />
        <Cell />
    </div>
  );
}
