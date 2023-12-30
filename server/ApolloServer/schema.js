import { gql } from 'apollo-server';

const typeDefs = gql`
type Fetchs {
  fetchs: String
}
type Query {
  fetchs: Fetchs
}
`;

export default typeDefs;
