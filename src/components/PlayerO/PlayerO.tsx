import React from 'react';

export function PlayerO({player}) {
  return (
    <div className={player? 'border border-solid': 'border border-solid bg-green-400'}>
        <h2>PLAYER O</h2>
    </div>
  );
}
