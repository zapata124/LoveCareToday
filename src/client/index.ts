import { ApolloClient, InMemoryCache } from '@apollo/client';

const lambdaAPI = import.meta.env.VITE_LAMBDA_API; 
const uriHost = import.meta.env.VITE_LAMBDA === 'true' ? lambdaAPI : 'http://localhost:4000/';

export const client = new ApolloClient({
    uri: uriHost,
    cache: new InMemoryCache(),
  });