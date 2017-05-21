module.exports = `
  type User {
    name: String,
    followers: [User],
    tweets(limit: Int): [Tweet]
  }
  type Tweet {
    content: String
    likes: Int
    author: User
  }
  type Query {
    tweets(limit: Int): [Tweet]
  }
`
