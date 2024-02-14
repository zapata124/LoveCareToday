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
`;

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
`;

export const getNonProfitByCause = gql`
  query Cause($browse: String, $take: Int, $page: Int) {
    cause(browse: $browse, take: $take, page: $page) {
      nonprofits {
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
      pagination {
        page
        page_size
        pages
        total_results
      }
    }
  }
`;

export const getSearchBarData = gql`
  query SearchBar($arg: String) {
    searchBar(arg: $arg) {
      data
    }
  }
`;
