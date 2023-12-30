import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDef from './schema.js';

const keys = dotenv.config().parsed;
const { APIkey } = keys;
const resolvers = {
  Query: {
    fetchs: async (_, { search, take}) => {

      try {
        const res = await fetch(`https://partners.every.org/v0.2/search/${search}?take=${take}&apiKey=${APIkey}`);
        const data = await res.json();
        const nonprofits = data.nonprofits;
        return nonprofits;
      } catch (err) {
        console.log(err);
      }
  
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
