import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDef from './schema';
// import orgHunterTypeDefs from './orgHunterSchema';
import axios from 'axios'
// import mergeTypeDefs from '@graphql-tools/merge';
// import mergeTypeDefs = require('@graphql-tools/merge')
const keys = dotenv.config().parsed;
const { APIkey, URL, HunterAPIKey } = keys;

const OrgHunterResolvers = {
  searchSummary: async (_, { tearm }) => {
    try {
      const res = await axios(`http://data.orghunter.com/v1/charitysearch?user_key=${HunterAPIKey}&searchTerm=${tearm}`);
      console.log(res.data.data)
      return res.data.data
    } catch (err) {
      console.log(err);
      return err
    }
  } 
}

const EveryOrgResolvers = {
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
      const nonprofit = res.data.data.nonprofitTags;
      return nonprofit;
    } catch (err) {
      console.log(err);
      return err
    }
  },
  cause: async (_, { browse, take, page }) => {
    try {
      const res = await axios(`https://${URL}/browse/${browse}?take=${take}&page=${page}&apiKey=${APIkey}`);
      return {
        ...res.data
      };
    } catch (err) {
      console.log(err);
      return err
    }
  },
  searchBar: async (_, { arg }) => {
    try {
      const rest = await axios(`https://${URL}/search/${arg}?apiKey=${APIkey}`);
      const test = await axios('http://data.orghunter.com/v1/charitysearch?user_key=d7b8060c6422bd63ac22bb80b862da76&searchTerm=treasure%20coast%20humane')
      console.log(test.data.data)
      const data = rest.data
      return {
        data: JSON.stringify(data)
      }
    } catch (err) {
      // is loggin an error 
      // console.log(err);
      return err
    }
  },
  organization: async (_, { name }) => {
    try {
      const rest = await axios(`https://${URL}/nonprofit/${name}?apiKey=${APIkey}`);
      const dataToString = JSON.stringify(rest.data.data)
      return {
        organization: dataToString 
      }
    } catch (err) {
      // console.log(err);
      return err
    }
  },
}
const resolvers = {
  Query: {
    ...EveryOrgResolvers,
    ...OrgHunterResolvers
  }
};

// we might need to change this to express
// const mergedTypeDefs = mergeTypeDefs([typeDef, orgHunterTypeDefs]) as any

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
