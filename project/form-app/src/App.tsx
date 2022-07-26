import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './services/Axios'
import requests from './services/Requests'

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
    async function fetchData() {
      const response = await axios.get(requests.fetchTasks)
      console.log(response)
      setMessage('After API😎')
    }
    fetchData()
  }
  return (
    <span className='SampleButton' onClick={handleClick}>
      ❤︎ {message}
    </span>
  )
}

export default App;
