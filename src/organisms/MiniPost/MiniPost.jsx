import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';
import StyledMiniPost from './StyledMiniPost';
import Title from '../../cells/Title';
import Paragraph from '../../cells/Paragraph';
import BackgroundImage from '../../cells/BackgroundImage';
import PostLabels from '../../organs/PostLabels';
import Author from '../../organs/Author';
import config from '../../utils/config';
import Spacer from '../../cells/Spacer';
import Hideable from '../../cells/Hideable';
import padding from '../../utils/padding';

const { breakpoints } = config;
const SideImage = styled.img`
  width: 100%;
  height: 25.063rem;
  margin: 0;
  object-fit:cover;
  align-self: center;
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
    max-width: ${(p) => (p.type === 'free-download' ? '347px' : '100%')};
    ${(p) =>
    p.type === 'podcast' &&
    css`
        max-height: 305px;
      `}
  }
  @media (min-width: ${breakpoints.lg}) {
    max-height: 100%;
    align-self: flex-end;
  }
`;
const PostRow = styled(Row)`
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.type === 'blog' ? padding({ bottom: 'sm' }) : padding({ vertical: 'sm' })}

  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
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
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  max-width: 585px;
  padding: 0;
`;
/**
 * MiniPost wrap image, title, Spacer and other components to display a preview of the large post
 * @param {boolean} cover Set the image of the post as cover or in the left side
 * @param {String} type Type of the post
 * @param {Object} info Info about the post
 * @param {String} title Title of the post
 * @param {String} src Path of the image
 * @param {String} alt Alt of the image (for accesibility)
 * @param {Object} author Contains the name, job and profile image of the author
 */
const MiniPost = ({ cover, type, info, title, text, src, alt, author }) => {
  return (
    <>
      {cover ? <BackgroundImage src={src} alt={alt} /> : null}

      <StyledMiniPost fluid cover={cover.toString()}>
        <PostRow>
          {type !== 'blog' && !cover ? (
            <>
              <PostCol>
                <SideImage src={src} alt={alt} type={type} />
              </PostCol>
              <Hideable visibleOn="lg" hideOn="sm">
                <Spacer size="xxl" direction="horizontal" />
              </Hideable>
            </>
          ) : null}

          <PostCol>
            {!cover && type !== 'blog' ? (
              <Hideable after={false} visibleOn="lg">
                <Spacer size="md" />
              </Hideable>
            ) : null}
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
                name={author.name}
                job="CEO at Viaducto Company"
                src={author.profile_image || "https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"}
              />
            )}
          </PostCol>
        </PostRow>
      </StyledMiniPost>
    </>
  );
};

export default MiniPost;
