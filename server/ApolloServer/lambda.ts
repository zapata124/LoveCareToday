import { ApolloServer } from 'apollo-server';
// import { ApolloServer } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import typeDef from './schema';
// import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import axios from 'axios';

const URL = 'https://partners.every.org/v0.2';
// const keys = dotenv.config().parsed;
// const { APIkey } = keys;
const APIkey = 'pk_live_4d17374d4c171f0f91524140256c6bc3'

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


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// export const graphqlHandler = startServerAndCreateLambdaHandler(
//   server as any,
//   // We will be using the Proxy V2 handler
//   handlers.createAPIGatewayProxyEventV2RequestHandler(),
// );

// export const graphqlHandler = server.createHandler();
