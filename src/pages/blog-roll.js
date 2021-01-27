import React, { useState, useEffect } from 'react';
import { BackgroundImage } from '../cells/BackgroundImage';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  <MiniPost key=""
    type="blog"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="free-download"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
    type="podcast"
    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
    alt="SITES"
    info={data}
  />,
  <MiniPost key=""
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
      setPostData(postData.concat(posts.slice(page, (page + 10))));
      setPage((page + 10));
    }, 400);
  }
  useEffect(() => {
    setPostData(postData.concat(posts.slice(0, page)));
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
