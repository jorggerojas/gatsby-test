import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import { tagInfo, postType } from '../organisms/BlogRoll';
import { GET_POSTS } from '../queries/index';
import Meta from '../organisms/Meta';
// import Scroll from '../utils/locomotiveScroll';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Blog = ({ location, navigate }) => {
  // callbacks object has = {location, navigate, pageContext, pageResources, params, path, pathContext, uri}
  let limit = 2;
  const [skip, setSkip] = useState(0);
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    variables: { skip, limit },
  });
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
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: false,
        getDirection: true,
        touchMultiplier: 2.5,
        lerp: 0.06,
      }}
      watch={[location, navigate]}
      containerRef={containerRef}
    >
      <Meta>
        <GlobalStyle />
        {/* <Scroll callbacks={callbacks} /> */}
        <div data-scroll-container ref={containerRef}>
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
          >
            {posts.length > 0 &&
              posts.map(({ node }, index) => {
                return (
                  <div key={`post-${index}-${node.title}`}>
                    {index % 10 === 0 && index !== 0 ? <Newsletter /> : null}
                    <MiniPost
                      data-scroll-container
                      cover={
                        index.toString().charAt(index.toString().length - 1) ===
                        '0'
                      }
                      key={index}
                      data-sal="fade"
                      data-sal-delay="100"
                      data-sal-easing="easeIn"
                      type={postType(node.tags)}
                      info={tagInfo(node.tags, node.reading_time)}
                      title={node.title}
                      slug={node.slug}
                      text={node.excerpt}
                      src={node.feature_image}
                      alt={`Imagen de ${node.title}`}
                      author={node.authors[0]}
                    />
                    {index === totalCount - 1 ? <Newsletter /> : null}
                  </div>
                );
              })}
            {loading && posts.length === 0 ? 'Cargando...' : null}
            {error &&
              'Ocurrió un error con el servidor, y no hemos podido consultar ningún post'}
          </InfiniteScroll>
        </div>
      </Meta>
    </LocomotiveScrollProvider>
  );
};

export default Blog;
