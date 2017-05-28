import React from 'react'
import './Tweet.css'

const Tweet = ({ content, authorName, authorId, likes }) => (
  <div className="tweet">
    <p className="content">{content}</p>
    <p className="author">{authorName} ({authorId})</p>
    <div className="likes">{likes}</div>
  </div>
)

export default Tweet
