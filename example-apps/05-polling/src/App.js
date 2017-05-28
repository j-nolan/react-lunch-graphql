import React from 'react'
import Tweet from './Tweet'
import './App.css'

const App = () => (
  <div className="App">
    <div className="AppHeader">
      <h1>MiniTwitter</h1>
    </div>
    <Tweet id="1" />
    <Tweet id="2" />
    <Tweet id="3" />
  </div>
)

export default App
