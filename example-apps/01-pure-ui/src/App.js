import React from 'react'
import Tweet from './Tweet'
import './App.css'

const App = () => (
  <div className="App">
    <div className="AppHeader">
      <h1>MiniTwitter</h1>
    </div>
    <Tweet
      content="The first tweet"
      authorName="Jane Doe"
      authorId="@JaneDoe"
      likes="22"
    />
    <Tweet
      content="The second tweet"
      authorName="John Doe"
      authorId="@JohnDoe"
      likes="23"
    />
  </div>
)

export default App
