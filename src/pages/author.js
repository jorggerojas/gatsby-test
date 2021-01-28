import React from 'react';
import { Avatar } from '../cells/Avatar';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
import { Title } from '../cells/Title';
import { Paragraph } from '../cells/Paragraph';
import styled from 'styled-components';
import padding from '../utils/padding';
import Spacer from '../cells/Spacer';

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
const TopPage = styled.div`
  ${padding({ vertical: 'sm', dis: true })}
`;
const AuthorPage = () => {
  return (
    <>
      <GlobalStyle />
      <TopPage>
        <Avatar
          src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
          alt="Carla Gonzalez foto"
          size="large"
        />
        <Spacer size="lg" />
        <Title level="D3">Clara González</Title>
        <Spacer size="micro" />
        <Paragraph size="sm" color="mutedGray">
          CEO at Company name
        </Paragraph>
      </TopPage>
      <MiniPost
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        type="blog"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />

      <MiniPost
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        type="podcast"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />

      <MiniPost
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        type="podcast"
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="SITES"
        info={data}
      />
      {/* <Author
        name="Carla Gonzáles"
        job="CEO at company name"
        src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
      /> */}
    </>
  );
};

export default AuthorPage;
