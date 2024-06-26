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

export const getOrganization = gql`
  query Organization($name: String) {
    organization(name: $name) {
      organization
    }
  }
`;

export const getOrgHunterSearchSummary = gql`
  query Query($tearm: String) {
    searchSummary(tearm: $tearm) {
      ein
      charityName
      url
      donationUrl
      city
      state
      zipCode
      start
      rows
      recordCount
      score
      acceptingDonations
      category
      eligibleCd
      deductibilityCd
      statusCd
      website
      missionStatement
      parent_ein
      latitude
      longitude
    }
  }
`;

export const getOrgHunterCharityBasic = gql`
  query Query($ein: Int) {
    charityBasic(ein: $ein) {
      ein
      name
      inCareOfName
      street
      city
      state
      zipCode
      country
      groupExemption
      subsection
      classification
      affiliation
      rullingDate
      deductibility
      deductibilityStatus
      foundation
      activity1
      activity2
      activity3
      organization
      exemptStatus
      taxPeriod
      assetCodeDesc
      incomeCodeDesc
      filingRequirementCodeDesc
      pfFilingRequirementCodeDesc
      accountingPeriod
      assetAmount
      incomeAmount
      form990
      nteeCd
      nteeClass
      nteeType
      sortName
      revocationDt
      revPostingDt
      irsRevocationStatus
      acceptingDonations
    }
  }
`;

export const getUser = gql`
  query Query($email: String) {
    getUser(email: $email) {
      bookmarks {
        label
        slug
      }
      email
      id
      lastname
      name
      avatar
      created
    }
  }
`;

const userFragment = gql`
  fragment UserInput on User {
    email
    id
    lastname
    name
    avatar
    created
    bookmarks {
      label
      slug
    }
  }
`;

export const authenticateUser = gql`
  query AuthenticateUser($email: String, $password: String) {
    authenticateUser(email: $email, password: $password) {
      ...UserInput
    }
  }
  ${userFragment}
`;

export const startAuthentication = gql`
  query Query($email: String) {
    startAuthentication(email: $email) {
      passcode
    }
  }
`;

export const createUser = gql`
  mutation Mutation(
    $name: String
    $lastname: String
    $email: String
    $password: String
    $confirmpassword: String
  ) {
    createUser(
      name: $name
      lastname: $lastname
      email: $email
      password: $password
      confirmpassword: $confirmpassword
    ) {
      email
      id
      lastname
      name
    }
  }
`;
// make fragment to reuse email, lastname, name, id
export const addBookmark = gql`
  mutation Mutation($email: String, $bookmark: String, $slug: String) {
    add_bookmark(email: $email, bookmark: $bookmark, slug: $slug) {
      ...UserInput
    }
  }
  ${userFragment}
`;

export const deleteBookmark = gql`
  mutation Mutation($bookmark: String, $email: String) {
    delete_bookmark(bookmark: $bookmark, email: $email) {
      ...UserInput
    }
  }
  ${userFragment}
`;

export const addUserProfileImage = gql`
  mutation Mutation($email: String, $avatar: String) {
    add_user_profile_image(email: $email, avatar: $avatar) {
      ...UserInput
    }
  }
  ${userFragment}
`;
