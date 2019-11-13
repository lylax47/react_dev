import React from 'react';
import './App.css';
import RollDie from './RollDie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

function App() {
  return (
    <div className="App">
      <RollDie />
    </div>
  );
}

export default App;
