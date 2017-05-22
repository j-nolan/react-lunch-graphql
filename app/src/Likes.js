import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import './Likes.css'

const Likes = ({ data, mutate }) => {
  if (data.loading) {
    return <p>Loading...</p>
  }
  if (data.error) {
    return <p>Error while loading like count: {data.error.message}</p>
  }

  return (
    <button className="likes" type="button" onClick={mutate}>
      {data.tweet.likes}
    </button>
  )
}

const query = gql`
query($id: ID!) {
  tweet(id: $id) {
    id
    likes
  }
}
`

const mutation = gql`
mutation($id: ID!) {
  likeTweet(id: $id) {
    id
    likes
  }
}
`

const mapPropsToOptions = ({ id }) => ({
  variables: {
    id
  }
})

export default compose(
  graphql(query, {
    options: mapPropsToOptions,
  }),
  graphql(mutation, {
    options: mapPropsToOptions,
  })
)(Likes)
