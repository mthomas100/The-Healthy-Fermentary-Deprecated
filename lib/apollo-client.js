import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { endpoint, prodEndpoint } from '../config';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  },
});

export default client;
