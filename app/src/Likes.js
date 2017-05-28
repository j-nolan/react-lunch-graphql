import React from 'react'
import { gql, graphql, compose } from 'react-apollo'
import Spinner from './Spinner'
import './Likes.css'

const Likes = ({ data, likeTweet }) => {
  if (data.loading) {
    return <Spinner />
  }
  if (data.error) {
    return <p>Error while loading like count: {data.error.message}</p>
  }

  return (
    <button className="likes" type="button" onClick={likeTweet}>
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

const likeTweetOptimisticResponse = tweet => ({
  __typename: 'Mutation',
  likeTweet: {
    id: tweet.id,
    __typename: 'Tweet',
    likes: tweet.likes + 1,
  },
})

export default compose(
  graphql(query, {
    options: ({ id }) => ({ variables: { id } }),
  }),
  graphql(mutation, {
    props: ({ ownProps, mutate }) => ({
      likeTweet: () => mutate({
        variables: { id: ownProps.data.tweet.id },
        optimisticResponse: likeTweetOptimisticResponse(ownProps.data.tweet),
      })
    })
  })
)(Likes)
