import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled, { css } from 'styled-components';
import GlobalStyle from '../utils/global';

const Dove = styled.div`
  height: 300px;
  padding: 5px;
  background: #feecf1;
`;

const Pagination = ({ data, pathContext, ...rest }) => {
  console.log(data)
  console.log(pathContext)
  console.log({...rest})
  const { hasMore, totalPosts} = pathContext;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data.allGhostPost.edges);
  }, [data]);

  const loadData = () => {
    console.log('loading data');
    // setPosts((data) => [...data, ...data]);
    // console.log(posts)
  };
  return (
    <>
      <GlobalStyle/>
    <InfiniteScroll
      css={css`
        overflow: hidden !important;
      `}
      data-sal="slide-up"
      data-sal-delay="1"
      data-sal-easing="ease"
      dataLength={totalPosts}
      next={loadData}
      loader={<h4>Loading...</h4>}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map(({ node }, index) => (
        <Dove key={`mini-post-${index}-`}>
          <h1>{node.title}</h1>
          {node.excerpt}
        </Dove>
      ))}
    </InfiniteScroll>
    </>
  );
};

export default Pagination;

export const query = graphql`
  query MyQuery($skip: Int!, $limit: Int!) {
    allGhostPost(
      sort: { fields: [created_at], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          feature_image
          excerpt
          slug
          authors {
            name
            profile_image
          }
        }
      }
    }
  }
`;
