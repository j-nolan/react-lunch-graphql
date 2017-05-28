import React from 'react'
import { gql, graphql } from 'react-apollo'
import Likes from './Likes'
import './Tweet.css'

const Tweet = ({ data }) => {
  if (data.loading) {
    return <p>Loading...</p>
  }

  if (data.error) {
    return <p>Error while loading tweet: {data.error.message}</p>
  }

  return (
    <div className="tweet">
      <p className="content">{data.tweet.content}</p>
      <Likes id={data.tweet.id} />
    </div>
  )
}

const query = gql`
  query ($id: ID!) {
    tweet(id: $id) {
      id
      content
      likes
    }
  }
`

export default graphql(query, {
  options: ({ id }) => ({
    variables: {
      id
    },
    pollInterval: 1000
  })
})(Tweet)
