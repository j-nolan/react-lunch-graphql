const users = [
  {
    name: '@dan_abramov',
    followers: ['@coffeeHeadJim', '@BrendanEich', '@paul_irish'],
    tweets: [1],
  },
  {
    name: '@coffeeHeadJim',
    followers: ['@graphqleu'],
    tweets: [],
  },
  {
    name: '@BrendanEich',
    followers: ['@dan_abramov', '@graphqleu'],
    tweets: [2],
  },
  {
    name: '@paul_irish',
    followers: ['@dan_abramov', '@BrendanEich', '@coffeeHeadJim'],
    tweets: [3],
  },
  {
    name: '@graphqleu',
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

const loadUser = (name) => {
  const user = users.find(u => u.name === name)
  return Promise.resolve(user)
}

const loadFollowers = name => loadUser(name)
  .then(user => Promise.all(user.followers.map(loadUser)))

module.exports = {
  loadTweets,
  loadUser,
  loadFollowers,
}
