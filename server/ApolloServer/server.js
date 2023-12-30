import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDef from './schema.js';

const keys = dotenv.config();
const resolvers = {
  Query: {
    fetchs: () => {
      console.log('fetchs');
      fetch('https://partners.every.org/v0.2/search/pets?take=1&apiKey=pk_live_4d17374d4c171f0f91524140256c6bc3')
        .then((res) => res.json())
      .then((data) => console.log(data.nonprofits));
      return 'test';
    },
  },
};
// we might need to change this to express
const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
