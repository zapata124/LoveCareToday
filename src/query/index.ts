import { gql } from '@apollo/client';

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
    query Cause($search: String, $take: Int) {
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