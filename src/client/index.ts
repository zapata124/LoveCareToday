import { ApolloClient, InMemoryCache } from '@apollo/client';

const lambdaAPI = import.meta.env.VITE_LAMBDA_API; 
const uriHost = import.meta.env.VITE_LAMBDA === 'true' ? lambdaAPI : 'http://localhost:4000/';

export const client = new ApolloClient({
    uri: uriHost,
    // uri: 'https://cyq257r5ci.execute-api.us-east-1.amazonaws.com/dev/graphql',
    cache: new InMemoryCache(),
  });