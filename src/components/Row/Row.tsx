import React from 'react';
import { Cell } from '../Cell';

export function Row() {
  return (
    <div className='flex flex-row justify-center'>
        <Cell />
        <Cell />
        <Cell />
    </div>
  );
}
