import React from 'react';
import { BackgroundImage } from '../cells/BackgroundImage';
import GlobalStyle from '../utils/global';
import { IntroBlog } from '../organisms/IntroBlog';
import styled from 'styled-components';

const data = [
  {
    text: 'BLOG - 7 MINUTE READ',
    size: 'sm',
    style: { marginRight: '7px' },
  },
  {
    text: 'SALES AND MARKETING, ENGINEERING',
    size: 'sm',
    hide: 'm',
    color: 'info',
  },
];

const MainContent = styled.div`
  padding-left: 38px;
  padding-right: 15px;

  @media (min-width: 576px) {
    padding-left: 125px;
  }
  @media (min-width: 768px) {
    padding-left: 99px;
    padding-right: 99px;
  }
  @media (min-width: 992px) {
    padding-left: 33px;
    padding-right: 31px;
  }
  @media (min-width: 1440px) {
    padding-left: 355px;
    padding-right: 165px;
  }
`;
export default () => (
  <>
    <GlobalStyle />
    <BackgroundImage
      src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
      alt=""
    />

    <MainContent>
      <IntroBlog data={data} />
      <IntroBlog data={data} />
      <IntroBlog data={data} />
    </MainContent>
  </>
);
