const express = require('express')
const graphqlHTTP = require('express-graphql')
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({
    typeDefs: [schema],
    resolvers,
  }),
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path,
  }),
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
