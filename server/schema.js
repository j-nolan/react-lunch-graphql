module.exports = `
  type User {
    id: ID
    name: String
    followers: [User]
    tweets(limit: Int): [Tweet]
  }
  type Tweet {
    id: ID
    content: String
    likes: Int
    author: User
  }
  type Query {
    tweets(limit: Int): [Tweet]
  }
  type Mutation {
    likeTweet(id: ID): Tweet
  }
`
