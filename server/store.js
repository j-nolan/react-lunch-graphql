const users = [
  {
    id: '@dan_abramov',
    name: 'Dan Abramov',
    followers: ['@coffeeHeadJim', '@BrendanEich', '@paul_irish'],
    tweets: [1],
  },
  {
    id: '@coffeeHeadJim',
    name: 'James Nolan',
    followers: ['@graphqleu'],
    tweets: [],
  },
  {
    id: '@BrendanEich',
    name: 'Brendan Eich',
    followers: ['@dan_abramov', '@graphqleu'],
    tweets: [2],
  },
  {
    id: '@paul_irish',
    name: 'Paul Irish',
    followers: ['@dan_abramov', '@BrendanEich', '@coffeeHeadJim'],
    tweets: [3],
  },
  {
    id: '@graphqleu',
    name: 'GraphQL Europe',
    followers: ['@coffeeHeadJim'],
    tweets: [],
  },
]

const tweets = [
  {
    id: 1,
    content: 'Something old, something new, something model, something view',
    likes: 241,
    author: '@dan_abramov',
  },
  {
    id: 2,
    content: 'Learn from my history, _mes enfants_! When designing something, esp. in a hurry, resist requests for "loose" or "easy to use" enhancements',
    likes: 49,
    author: '@BrendanEich',
  },
  {
    id: 3,
    content: 'Protip: `cd -` and `git checkout -` return you to where you were last',
    likes: 86,
    author: '@paul_irish',
  },
]

const loadTweets = ({ author, limit }) => {
  const filteredTweets = author ?
    tweets.filter(tweet => tweet.author === author)
    : tweets
  return Promise.resolve(filteredTweets.slice(0, limit))
}

const loadTweet = id =>
  tweets.find(t => t.id === id)

const loadUser = (id) => {
  const user = users.find(u => u.id === id)
  return Promise.resolve(user)
}

const loadFollowers = id => loadUser(id)
  .then(user => Promise.all(user.followers.map(loadUser)))

const likeTweet = (id) => {
  const tweet = loadTweet(id)
  if (tweet) {
    tweet.likes += 1
  }
  return Promise.resolve(tweet)
}

module.exports = {
  loadTweets,
  loadTweet,
  loadUser,
  loadFollowers,
  likeTweet,
}
