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
  nonprofit(take: Int): [Nonprofit]
  cause(browse: String, take: Int, page: Int): GetCauses
  searchBar(arg: String): SearchBar
  organization(name: String): Organization
}


type SearchSummary {
  ein: String
  charityName: String
  url: String
  donationUrl: String
  city: String
  state: String
  zipCode: String
  start: Int
  rows: Int
  recordCount: Int
  score: Int
  acceptingDonations: Int
  category: String
  eligibleCd: Int
  deductibilityCd: Int
  statusCd: Int
  website: String
  missionStatement: String
  parent_ein: Int
  latitude: String
  longitude: String 
}

type CharityBasic {
  ein: Int
  name: String        
  inCareOfName: String
  street: String
  city: String
  state: String
  zipCode: String
  country: String
  groupExemption: String
  subsection: String
  classification: String
  affiliation: String
  rullingDate: String
  deductibility: String
  deductibilityStatus: String
  foundation: String
  activity1: String
  activity2: String
  activity3: String
  organization: String
  exemptStatus: String
  taxPeriod: String
  assetCodeDesc: String
  incomeCodeDesc: String
  filingRequirementCodeDesc: String
  pfFilingRequirementCodeDesc: String
  accountingPeriod: String
  assetAmount: String
  incomeAmount: String
  form990: String
  nteeCd: String
  nteeClass: String
  nteeType: String
  sortName: String
  revocationDt: String
  revPostingDt: String
  irsRevocationStatus: String
  acceptingDonations: Int
}
type Query {
  searchSummary(tearm: String): [SearchSummary]
  charityBasic(ein: Int): CharityBasic
}
`;

export default typeDefs;
