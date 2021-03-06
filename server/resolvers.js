const store = require('./store')

module.exports = {
  Tweet: {
    author: ({ author }) => store.loadUser(author),
  },
  User: {
    followers: ({ id }) => store.loadFollowers(id),
    tweets: ({ id }, { limit }) => store.loadTweets({ author: id, limit }),
  },
  Query: {
    tweets: (_, { limit }) => store.loadTweets({ limit }),
    tweet: (_, { id }) => store.loadTweet(Number(id)),
  },
  Mutation: {
    likeTweet: (_, { id }) => store.likeTweet(Number(id)),
  },
}
