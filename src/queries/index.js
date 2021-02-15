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
            bio
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
            bio
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
          bio
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

export const GET_POST_DATA = gql`
  query GetPost($slug: String!, $tag: StringQueryOperatorInput) {
  ghostPost(slug: {eq: $slug}){
    title
    excerpt
    reading_time
    feature_image
    ghostId
    id
    slug
    html
    primary_tag {
      name
      slug
      visibility
    }
    tags {
      name
      visibility
      slug
    }
    primary_author {
      name
      bio
      profile_image
      slug
    }
  }
  allGhostPost(filter: {tags: {elemMatch: {slug: $tag}}}) {
    edges {
      node {
        title
        feature_image
        slug
        reading_time
        
      }
    }
  }
}
`;