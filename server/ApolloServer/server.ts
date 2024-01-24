import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDef from './schema';
import axios from 'axios'

const keys = dotenv.config().parsed;
const { APIkey, URL } = keys;

const resolvers = {
  Query: {
    search: async (_, { search, take}) => {
      try {
        const res = await axios(`https://${URL}/search/${search}?take=${take}&apiKey=${APIkey}`);
        const nonprofits = res.data.nonprofits;
        return nonprofits;
      } catch (err) {
        console.log(err);
        return err
      }
    },
    nonprofit: async (_, { take }) => {
      try {
        const res = await axios(`https://${URL}/nonprofit/maps?take=${take}&apiKey=${APIkey}`);
        const nonprofit = await res.data.data.nonprofitTags;
        return nonprofit;
      } catch (err) {
        console.log(err);
        return err
      }
    },
    cause: async (_, { browse, take }) => {
      try {
        const res = await axios(`https://${URL}/browse/${browse}?take=${take}&apiKey=${APIkey}`);
        const nonprofit = res.data.nonprofits;
        return nonprofit;
      } catch (err) {
        console.log(err);
        return err
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
