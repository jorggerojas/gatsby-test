import React, { useState, useEffect } from 'react';
import { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import AuthorContainer from '../organisms/AuthorContainer';
import Meta from '../organisms/Meta';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import Data from '../hooks/postsData';
import GlobalStyle from '../utils/global';

const AuthorPage = () => {
  const dataPosts = Data();
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
    <Meta>
      <GlobalStyle />
      <AuthorContainer />
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
                cover={index.toString().charAt(index.toString().length - 1) === "0" && index !== 0}
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
    </Meta>
  );
};

export default AuthorPage;
