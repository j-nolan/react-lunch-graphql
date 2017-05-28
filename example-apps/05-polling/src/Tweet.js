import React from 'react'
import { gql, graphql } from 'react-apollo'
import Spinner from './Spinner'
import Likes from './Likes'
import './Tweet.css'

const Tweet = ({ data }) => {
  if (data.loading) {
    return <Spinner />
  }

  if (data.error) {
    return <p>Error while loading tweet: {data.error.message}</p>
  }

  return (
    <div className="tweet">
      <p className="content">{data.tweet.content}</p>
      <p className="author">{data.tweet.author.name} ({data.tweet.author.id})</p>
      <Likes id={data.tweet.id} />
    </div>
  )
}

const query = gql`
  query ($id: ID!) {
    tweet(id: $id) {
      id
      content
      author {
        id
        name
      }
    }
  }
`

export default graphql(query, {
  options: { pollInterval: 4000 }
})(Tweet)
