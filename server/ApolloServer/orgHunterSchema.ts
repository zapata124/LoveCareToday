import { gql } from 'apollo-server';

const orgHunterTypeDefs = gql`
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
type Query {
    searchSummary(tearm: String): [SearchSummary]
}
`;

export default orgHunterTypeDefs
