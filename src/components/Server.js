import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import UserList from './UserList';

const client = new ApolloClient({
  uri: 'http://3.17.43.83:4000/graphql'
  //uri: 'http://localhost:4000/graphql'
});

class Server extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div >
          <UserList />
        </div>
      </ApolloProvider>
    );
  }
}

export default Server;