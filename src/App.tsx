import React from 'react';
import {Board} from './components/Board';
import {PlayerX} from './components/PlayerX';
import {PlayerO} from './components/PlayerO';

function App() {
  return (
    <div className='flex justify-center pt-14 space-x-8'>
      <PlayerX />
      <Board />
      <PlayerO />
    </div>
  );
}

export default App;
