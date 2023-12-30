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
type Nonprofit {
  id: String,
  tagName: String,
  causeCatergory: String,
  title: String,
  tagImageCloudinaryId: String,
  tagUrl: String,
  tagImageUrl: String,
}
type Cause {
  description: String,
  name: String,
  profileUrl: String,
  logoUrl: String,
  coverImageUrl: String,
  logoCloudinaryId: String,
  matchedTerms: [String],
  slug: String,
  location: String,
  tags: [String],
}
type Query {
  search(search: String, take: Int): [Search]
}
type Query {
  nonprofit(take: Int): [Nonprofit]
}
type Query {
  cause(browse: String): [Cause]
}
`;

export default typeDefs;
