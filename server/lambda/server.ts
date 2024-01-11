import { ApolloServer } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import typeDef from '../ApolloServer/schema';
import axios from 'axios';

const keys = dotenv.config().parsed;
const { APIkey, URL } = keys;


const resolvers = {
  Query: {
    search: async (_, { search, take}) => {
      try {
        const res = await axios.get(`${URL}/search/${search}?take=${take}&apiKey=${APIkey}`);
        const nonprofits = await res.data.nonprofits;
        return nonprofits;
      } catch (err) {
        console.log(err);
      }
    },
    nonprofit: async (_, { take }) => {
      try {
        const res = await axios.get(`${URL}/nonprofit/maps?take=${take}apiKey=${APIkey}`);
        const nonprofit = await res.data.data.nonprofitTags;
        return nonprofit;
      } catch (err) {
        console.log(err);
      }
    },
    cause: async (_, { browse }) => {
      try {
        const res = await axios.get(`${URL}/browse/${browse}?apiKey=${APIkey}`);
        const nonprofit = await res.data.nonprofits;
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


export const graphqlHandler = server.createHandler();
