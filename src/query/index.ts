import { gql } from '@apollo/client';
import { get } from 'http';

export const getNonProfit = gql`
    query Query {
        nonprofit {
            causeCategory
            id
            tagImageCloudinaryId
            tagImageUrl
            tagName
            tagUrl
            title
        }
    }
`

export const getNonProfitByTitle = gql`
    query Query($search: String, $take: Int) {
        search(search: $search, take: $take) {
            coverImageUrl
            description
            ein
            logoCloudinaryId
            location
            logoUrl
            matchedTerms
            name
            profileUrl
            slug
            tags
            websiteUrl
        }
    }
`

export const getNonProfitByCause = gql`
    query Query($browse: String, $take: Int) {
            cause(browse: $browse, take: $take) {
            coverImageUrl
            description
            location
            logoCloudinaryId
            logoUrl
            matchedTerms
            name
            profileUrl
            slug
            tags
        }
    }
`