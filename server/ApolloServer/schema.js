import { gql } from 'apollo-server';

const typeDefs = gql`
type Search {
  description: String,
  ein: String,
  name: String,
  profileUrl: String,
  logoUrl: String,
  coverImageUrl: String,
  logoCloudinaryId: String,
  matchedTerms: [String],
  slug: String,
  location: String,
  websiteUrl: String,
  tags: [String],
}
type Query {
  fetchs(search: String, take: Int): [Search]
}
`;

export default typeDefs;
