import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
