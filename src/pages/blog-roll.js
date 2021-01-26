import React from 'react';
import { BackgroundImage } from '../cells/BackgroundImage';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
// import styled from 'styled-components';

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

const blog = () => {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt=""
      />
      <MiniPost type="blog" info={data} />
      <MiniPost
        type="podcast"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />
      <MiniPost
        type="free-download"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />
      <MiniPost
        type="podcast"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />
      <MiniPost
        type="free-download"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />
      {/* <MainContent>
        <IntroBlog data={data} />
        <IntroBlog data={data} />
        <IntroBlog data={data} />
      </MainContent>
      <IntroBlog
        data={data}
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
      />
      <IntroBlog
        data={data}
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
      />
      <IntroBlog
        data={data}
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
      /> */}
    </>
  );
};

export default blog;
