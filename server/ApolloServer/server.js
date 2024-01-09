import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDef from './schema.js';


const URL = 'https://partners.every.org/v0.2';
const keys = dotenv.config().parsed;
const { APIkey } = keys;


const resolvers = {
  Query: {
    search: async (_, { search, take}) => {
      try {
        const res = await fetch(`${URL}/search/${search}?take=${take}&apiKey=${APIkey}`);
        const data = await res.json();
        const nonprofits = data.nonprofits;
        return nonprofits;
      } catch (err) {
        console.log(err);
      }
    },
    nonprofit: async (_, { take }) => {
      try {
        console.log('server')
        const res = await fetch(`${URL}/nonprofit/maps?take=${take}apiKey=${APIkey}`);
        const data = await res.json();
        const nonprofit = data.data.nonprofitTags;
        return nonprofit;
      } catch (err) {
        console.log(err);
      }
    },
    cause: async (_, { browse }) => {
      try {
        const res = await fetch(`${URL}/browse/${browse}?apiKey=${APIkey}`);
        const data = await res.json();
        const nonprofit = data.nonprofits;
        return nonprofit;
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
