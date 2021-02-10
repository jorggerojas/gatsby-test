import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($skip: Int!, $limit: Int!) {
    allGhostPost(
      sort: { fields: [created_at], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          reading_time
          feature_image
          excerpt
          slug
          authors {
            name
            profile_image
            slug
          }
          tags{
            name
            slug
            visibility
          }
        }
      }
      totalCount
    }
  }
`;

export const GET_AUTHOR_DATA = gql`
  query GetAuthorData($skip: Int!, $limit: Int!, $slug: StringQueryOperatorInput) {
    allGhostPost(
      sort: { fields: [created_at], order: DESC }
      skip: $skip
      limit: $limit
      filter: {authors: {elemMatch: {slug: $slug}}}
    ) {
      edges {
        node {
          id
          title
          reading_time
          feature_image
          excerpt
          slug
          authors {
            name
            profile_image
            slug
            id
          }
          tags{
            name
            slug
            visibility
          }
        }
      }
      totalCount
    }
  }
`;

export const GET_TAG_DATA = gql`
query GetTagData($skip: Int!, $limit: Int!,$slug: StringQueryOperatorInput) {
  allGhostPost(sort: {fields: [created_at], order: DESC}, skip: $skip, limit: $limit, filter: {tags: {elemMatch: {slug: $slug}}}) {
    edges {
      node {
        id
        title
        reading_time
        feature_image
        excerpt
        slug
        authors {
          name
          profile_image
          slug
          id
        }
        tags{
		  name
          slug
          visibility
        }
      }
    }
  }
}
`;