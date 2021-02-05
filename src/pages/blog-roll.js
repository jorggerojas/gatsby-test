import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import Data from '../hooks/postsData';

const Blog = () => {
  const dataPosts = Data().sort();
  const [page, setPage] = useState(10);
  const [postData, setPostData] = useState([]);
  const [hasMoreContent, setHasMoreContent] = useState(true);
  const loadData = () => {
    if ((postData.length >= dataPosts.length)) {
      setHasMoreContent(false);
      return;
    }
    setTimeout(() => {
      setPostData(postData.concat(dataPosts.slice(page, (page + 10))));
      setPage((page + 10));
    }, 400);
  }
  useEffect(() => {
    setPostData(postData.concat(dataPosts.slice(0, page)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <GlobalStyle />
      <InfiniteScroll
        css={css`overflow: hidden !important;`}
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        dataLength={postData.length}
        next={loadData}
        loader={<h4>Loading...</h4>}
        hasMore={hasMoreContent}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {postData.map(({ node }, index) => {
          return (
            <div key={`n${index}`}>
              {(index % 10 === 0 && index !== 0) || (index === dataPosts.length) ? <Newsletter /> : null}
              <MiniPost
                cover={index.toString().charAt(index.toString().length - 1) === "0"}
                key={index}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="easeIn"
                type={'video'}
                info={'jijiji'}
                title={node.title}
                text={node.excerpt}
                src={node.feature_image}
                alt={node.feature_image}
                author={node.authors[0]}
              />
            </div >
          )
        })}
      </InfiniteScroll>
    </>
  );
};

export default Blog;
