const store = require('./store')

module.exports = {
  Tweet: {
    author: ({ author }) => store.loadUser(author),
  },
  User: {
    followers: ({ name }) => store.loadFollowers(name),
    tweets: ({ name }, { limit }) => store.loadTweets({ author: name, limit }),
  },
  Query: {
    tweets: (_, { limit }) => store.loadTweets({ limit }),
  },
}
