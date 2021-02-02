import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';
import StyledMiniPost from './StyledMiniPost';
import { Title } from '../../cells/Title';
import { Paragraph } from '../../cells/Paragraph';
import { BackgroundImage } from '../../cells/BackgroundImage';
import PostLabels from '../../organs/PostLabels';
import Author from '../../organs/Author';
import config from '../../utils/config';
import Spacer from '../../cells/Spacer';
import Hideable from '../../cells/Hideable';
import padding from '../../utils/padding';

const { display, breakpoints } = config;
const SideImage = styled.img`
  width: 100%;
  height: 25.063rem;
  margin: 0;
  transition: max-width 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  transition: max-height 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  @media (min-width: ${breakpoints.xs}) {
    ${(p) =>
      p.type === 'podcast' &&
      css`
        max-height: 145px;
      `}
    ${(p) =>
      p.type === 'free-download' &&
      css`
        max-height: 330px;
      `}
  }
  @media (min-width: ${breakpoints.sm}) {
    width: calc(calc(100% - 25.063rem) + 25.063rem);
    ${(p) =>
      p.type === 'podcast' &&
      css`
        max-height: 216px;
      `}
    ${(p) =>
      p.type === 'free-download' &&
      css`
        max-height: 440px;
      `}
  }
  @media (min-width: ${breakpoints.md}) {
    width: 100%;
    max-width: ${(p) => (p.type === 'free-download' ? '347px' : '100%')};
    ${(p) =>
      p.type === 'podcast' &&
      css`
        max-height: 305px;
      `}
  }
  @media (min-width: ${breakpoints.lg}) {
    max-height: 100%;
  }
`;
const PostRow = styled(Row)`
  margin: 0;
  flex-direction: column;
  justify-content: center;

  ${padding({ horizontal: 'sm' })}
  ${(p) =>
    p.type === 'blog' ? padding({ bottom: 'sm' }) : padding({ vertical: 'sm' })}

  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    padding-left: 2.063rem;
    padding-right: 6.951rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    padding-left: 10.313rem;
    padding-right: 10.389rem;
  }
`;
const PostCol = styled(Col)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: start;
  max-width: 585px;
  padding: 0;
  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    align-items: flex-start;
  }
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;
const MiniPost = ({ cover, type, info, title, text, src, alt }) => {
  return (
    <StyledMiniPost fluid cover={cover}>
      {cover ? <BackgroundImage src={src} alt={alt} /> : null}
      <PostRow cover={cover}>
        {type !== 'blog' && !cover ? (
          <PostCol>
            <SideImage src={src} alt={alt} type={type} />
          </PostCol>
        ) : null}
        <Hideable visibleOn="lg">
          <Spacer size="xxl" direction="horizontal" />
        </Hideable>
        <Col
          style={{
            maxWidth: '585px',
            padding: 0,
          }}
        >
          <Row>
            <Col style={{ padding: 0 }}>
              <PostLabels
                reading_time={7}
                type={type}
                category="SALES AND MARKETING, ENGINEERING"
                align="start"
                justify="start"
              />
            </Col>
          </Row>
          <Title level="4" weight="400" lineHeight="2.243rem">
            {title}
          </Title>
          <Spacer size="md" />
          <Paragraph lineHeight="1.5" weight="300">
            {text}
          </Paragraph>
          <Spacer size="xl" />

          {type === 'free-download' ? null : (
            <Author
              name="Clara González"
              job="CEO at Viaducto Company"
              src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
            />
          )}
        </Col>
      </PostRow>
    </StyledMiniPost>
  );
};

export default MiniPost;
