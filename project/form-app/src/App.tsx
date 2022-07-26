import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './services/Axios'
import requests from './services/Requests'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetButton />
        <PostButton />
      </header>
    </div>
  );
}

function GetButton() {
  const [message, setMessage] = useState('Click');
  const handleClick = () => {
    // Axiosで通信してみよーっと
    async function fetchData() {
      const response = await axios.get(requests.Tasks)
      console.log(response)
      setMessage('😎Done😎')
    }
    fetchData()
  }
  return (
    <span className='SampleButton' onClick={handleClick}>
      [GET] {message} [GET]
    </span>
  )
}

function PostButton() {
  const [message, setMessage] = useState('Click');
  const handleClick = () => {
    // Axiosで通信してみよーっと
    async function fetchData() {
      const data = JSON.stringify({
        title: "これはReactから送信されているよ！"
      })
      const response = await axios.post(requests.Tasks, data, {
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(response)
      setMessage('😎Done😎')
    }
    fetchData()
  }
  return (
    <span className='SampleButton' onClick={handleClick}>
      [POST] {message} [POST]
    </span>
  )

}

export default App;
