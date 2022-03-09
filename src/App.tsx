import React from 'react';
import {Board} from './components/Board';
import {PlayerX} from './components/PlayerX';
import {PlayerO} from './components/PlayerO';

function App() {
  return (
    <div>
      <PlayerX />
      <Board />
      <PlayerO />
    </div>
  );
}

export default App;
