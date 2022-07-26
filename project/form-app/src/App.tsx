import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SampleButton />
      </header>
    </div>
  );
}

function SampleButton() {
  const [message, setMessage] = useState('Before API🥺');
  const handleClick = () => {
    // Axiosで通信してみよーっと

    setMessage('After API😎')
  }
  return (
    <span className='SampleButton' onClick={handleClick}>
      ❤︎ {message}
    </span>
  )
}

export default App;
