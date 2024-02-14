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
  causeCategory: String,
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
type Pagination {
  page: Int,
  pages: Int,
  page_size: Int,
  total_results: Int
}
type GetCauses {
  nonprofits: [Cause],
  pagination: Pagination
}
type SearchBar {
  data: String
}
type Organization {
  organization: String
}
type Query {
  search(search: String, take: Int): [Search]
}
type Query {
  nonprofit(take: Int): [Nonprofit]
}
type Query {
  cause(browse: String, take: Int, page: Int): GetCauses
}
type Query {
  searchBar(arg: String): SearchBar
}
type Query {
  organization(name: String): Organization
}
`;

export default typeDefs;
