module.exports = `
  # Welcome to the MiniTwitter GraphQL API. It was built by James Nolan as a
  # demonstration for the May 29th React Lunch about GrapHQL and Apollo client

  # Users can write tweets. Users have IDs that have the format of a twitter handle
  type User {
    id: ID
    name: String
    followers: [User]
    tweets(limit: Int): [Tweet]
  }

  # A tweet typically consists in a small text and the number of people that liked it
  type Tweet {
    id: ID
    content: String
    likes: Int
    author: User
  }

  # Queries allows the client to retrieve data from the API. GraphQL queries can be
  # compared to GET requests in REST APIs
  type Query {

    # Returns a list of all the tweets. You can optionally pass a limit parameter to
    # specify the max number of tweets the API can return
    tweets(limit: Int): [Tweet]

    # Returns a single tweet by its ID
    tweet(id: ID!): Tweet

  }

  # Mutations are similar to Queries, except that they will probably change something
  # in the data. GraphQL Mutations can be compared to POST requests in REST APIs
  type Mutation {

    # Updates the "like" count of a given tweet. You should pass the ID of the tweet
    # to update
    likeTweet(id: ID!): Tweet

  }
`
