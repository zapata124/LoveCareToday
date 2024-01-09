import { gql } from '@apollo/client';

export const getNonProfit = gql`
    query Query {
        nonprofit {
            causeCatergory
            id
            tagImageCloudinaryId
            tagImageUrl
            tagName
            tagUrl
            title
        }
    }
`