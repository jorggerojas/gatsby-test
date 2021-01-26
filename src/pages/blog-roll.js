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
    family: 'DM Sans'
  },
  {
    text: 'SALES AND MARKETING, ENGINEERING',
    size: 'xxs',
    color: 'info',
    family: 'DM Sans',
    hide: 'sm'
  },
];

// const MainContent = styled.div`
//   padding-left: 38px;
//   padding-right: 15px;

//   @media (min-width: 576px) {
//     padding-left: 125px;
//     padding-right: 61px;
//   }
//   @media (min-width: 768px) {
//     padding-left: 99px;
//     padding-right: 99px;
//   }
//   @media (min-width: 992px) {
//     padding-left: 33px;
//     padding-right: 31px;
//   }
//   @media (min-width: 1440px) {
//     padding-left: 355px;
//     padding-right: 165px;
//   }
// `;
const blog = () => {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt=""
      />
      <MiniPost src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES" info={data} />
      <MiniPost src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES" info={data} />
      <MiniPost src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES" info={data} />
      <MiniPost src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES" info={data} />
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
}

export default blog;