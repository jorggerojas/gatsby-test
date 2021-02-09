import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';

const GET_POSTS = gql`
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
          feature_image
          excerpt
          slug
          authors {
            name
            profile_image
          }
        }
      }
      totalCount
    }
  }
`;
const Blog = () => {
  let limit = 2;
  const [skip, setSkip] = useState(0);
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    variables: { skip, limit },
  });

  useEffect(() => {
    if (data && data.allGhostPost.edges.length > 0) {
      setTotalCount(data.allGhostPost.totalCount);
      setPosts((previousPosts) => [
        ...previousPosts,
        ...data.allGhostPost.edges,
      ]);
      setSkip((s) => s + data.allGhostPost.edges.length);
    }
  }, [data]);

  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = () => {
    if (posts.length < totalCount) {
      setHasMore(true);
      setTimeout(() => {
        refetch({
          limit,
          skip: posts.length,
        });
      }, 5000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <InfiniteScroll
        css={css`
          overflow: hidden !important;
        `}
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        dataLength={totalCount}
        next={loadMorePosts}
        loader={<h4>Cargando...</h4>}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.length > 0 &&
          posts.map(({ node }, index) => {
            return (
              <div key={`post-${index}-${node.title}`}>
                {(index % 10 === 0 && index !== 0) || index === totalCount ? (
                  <Newsletter />
                ) : null}
                <MiniPost
                  cover={
                    index.toString().charAt(index.toString().length - 1) === '0'
                  }
                  key={index}
                  data-sal="fade"
                  data-sal-delay="100"
                  data-sal-easing="easeIn"
                  type={'video'}
                  info={'jijiji'}
                  title={node.title}
                  text={node.excerpt}
                  src={node.feature_image}
                  alt={`Imagen de ${node.title}`}
                  author={node.authors[0]}
                />
              </div>
            );
          })}
        {loading && posts.length == 0 ? 'Cargando...' : null}
        {error &&
          'Ocurrió un error con el servidor, y no hemos podido consultar ningún post'}
      </InfiniteScroll>
    </>
  );
};

export default Blog;
