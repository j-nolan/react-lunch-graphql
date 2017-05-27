# React Lunch Presentation

This is the repository for the May 29th EPFL React Lunch presentation about GraphQL and the Apollo client for React.

- The `presentation` directory contains the slides of the presentation.

`cd presentation && npm install && npm start`

- The `server` directory contains a basic server that serves mocked tweets. It also serves as a basic example of how to implement a basic GraphQL server using `express` and `express-graphql`.

`cd server && npm install && npm start`

# Contents

## About my self

- James Nolan
- "Full stack" software engineer @ coteries • Lab
- JavaScript, React
- Twitter <a href="https://twitter.com/CoffeeHeadJim">@CoffeeHeadJim</a>
- j.nolan@otherwise.ch


## History

- 2012, Facebook redesigns app after HTML5 fiasco
- "What would an ideal API look like?"
- Since then, GraphQL powers the Android and iOS Facebook apps
- 300 billion+ requests per day at Facebook
- 2015, open sourced


## Who uses it?

- 20 Minutes
- Club Med
- Coursera
- Facebook
- Github
- Meteor
- Pinterest
- Product Hunt
- Shopify
- Sky network


## The problem with REST

- Overfetching (with example)
- Extra round trips (with example)
- REST's solutions
  - Explicit fields
  - Subtrees
  - More endpoints
- Hard to get right
  - How to enumerate fields in subtrees?
  - When is a subtree more relevant than a reference (ID)?
  - Should the backend developers maintain endpoints for each frontend view?
  - How to keep a reasonable number of endpoints?
  - Why would we let the server decide what data to return?


## What is GraphQL?

- Defines a data shape
- Hierarchical
- Strongly typed
- Protocol, not storage
- Introspective
- Lets clients specify their *own data needs*
- Lets the server expose its *own capabilities*


## Queries

- Simple, flat query example (get tweet list)
- Query with hardcoded parameter example (tweet list with limit)
- Deep query example (tweet list with author's name)
- Very deep, cyclic query example (tweet list with author, his followers, their tweets)
- Query with variable parameter example (get single tweet by ID)


## Mutations

- Mutation example ("like" a tweet)
- Difference with queries


## Subscriptions

- Example gif
- Example subscription (subscribe to new tweets by author)


## Schemas and types

- "real life" schema example (MiniTwitter API)
- Scalar types (Int, Float, String, Boolean, ID, custom scalars)
- Enums
- Lists and null values
- Other constructs (interfaces, unions, input types, fragments, directives)


## Apollo

- Made by Meteor team
- Alternative to Relay
- Step 0: running backend and frontend
- Step 1: Creating a "pure" UI
- Step 2: Connecting the <Tweet /> component to a GraphQL query
- Step 3: Connecting the <Like /> component to a graphql mutation
- Step 4: Optimistic <Like /> component
- Step 5: (Pagination, if I have time to make an example)
- Step 6: (Polling, if I have time to make an example)
- Step 7: (Subscriptions, if I have time to make an example)


## Mini case studies

- Delayed queries (using a higher order component to delay the mouting of an Apollo wrapped component)
- Manual store updated (limitations of Apollo store and how to solve them)
- Offline first (using redux-persist)


## Tools

- Graphiql
- Apollo dev tools
- Apollo Launchpad
- Graph.cool
- Lokka


## Thanks

- Martijn Walraven
- Stian Håklev
- Manuel Spuhler


## Sources
- [Strong typing from the server to the UI with GraphQL](https://www.youtube.com/watch?v=MGHwJ-dH2Os), Martijn Walraven @ UIKonf 2017
- [Who's using GraphQL?](http://graphql.org/users/)
- [GraphQL, a data query language](https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/), Lee Byron
