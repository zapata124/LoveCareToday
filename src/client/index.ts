import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    // uri: 'https://cyq257r5ci.execute-api.us-east-1.amazonaws.com/dev/graphql',
    cache: new InMemoryCache(),
  });