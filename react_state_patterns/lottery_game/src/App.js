import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <h1>Lottery App</h1>
      <Lottery />
      <Lottery title="Mini-lotto" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
