import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from 'styled-components';
import { BackgroundImage } from '../cells/BackgroundImage';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
const random = Math.floor((Math.random() * (37)) + 1);


const data = [
  {
    text: 'PODCAST - 7 MINUTE READ',
    size: 'xxs',
    padding: { right: 'md' },
    family: 'DM Sans',
  },
  {
    text: 'SALES AND MARKETING, ENGINEERING',
    size: 'xxs',
    color: 'info',
    family: 'DM Sans',
    hide: 'sm',
  },
];

const posts = [
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="blog"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="free-download"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key={`p${random}`}
    data-sal="slide-up"
    data-sal-delay="1"
    data-sal-easing="ease"
    type="free-download"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />
];


const Blog = () => {
  const [page, setPage] = useState(10);
  const [postData, setPostData] = useState([]);
  const [hasMoreContent, setHasMoreContent] = useState(true);
  const loadData = () => {
    if ((postData.length >= posts.length)) {
      setHasMoreContent(false);
      return;
    }
    setTimeout(() => {
      setPostData(postData.concat(posts.slice(page, (page + 10)), <Newsletter />));
      setPage((page + 10));
    }, 400);
  }
  useEffect(() => {
    setPostData(postData.concat(posts.slice(0, page), <Newsletter key={`n${random}`} />));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <GlobalStyle />
      <BackgroundImage
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt=""
      />
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

        {postData}
      </InfiniteScroll>
    </>
  );
};

export default Blog;
