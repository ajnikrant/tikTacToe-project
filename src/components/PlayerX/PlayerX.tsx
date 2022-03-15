import React from 'react';

export function PlayerX({player}) {

  return (
    <div className={player? 'border border-solid bg-green-400' : 'border border-solid'}>
        <h2>PLAYER X</h2>
    </div>
  );
}
