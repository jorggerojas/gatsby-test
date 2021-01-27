import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';
import StyledMiniPost from './StyledMiniPost';
import { Title } from '../../cells/Title';
import { Paragraph } from '../../cells/Paragraph';
import { AuthorDescription } from '../../organs/AuthorDescription';
import { PostDescription } from '../../tissues/PostDescription';
import padding from '../../utils/padding';
import config from '../../utils/config';

const { display, breakpoints } = config;
const SideImage = styled.img`
  width: 100%;
  height: 25.063rem;
  margin: 0;
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
  padding-left: 2.375rem;
  padding-right: 0.938rem;
  justify-content: center;

  @media (min-width: ${breakpoints.sm}) {
    padding-left: ${display.mobile.sm};
    padding-right: ${display.mobile.sm};
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
  align-items: flex-start;
  justify-content: start;
  max-width: 585px;
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
const MiniPost = ({ type, info, text, src, alt }) => {
  return (
    <StyledMiniPost fluid>
      <PostRow>
        {type !== 'blog' ? (
          <PostCol css={padding({ right: 'xl', bottom: 'xl' })} xs>
            <SideImage src={src} alt={alt} type={type} />
          </PostCol>
        ) : null}

        <Col
          css={padding({ vertical: 'sm', horizontal: 0 })}
          style={{
            maxWidth: type === 'blog' ? '538px' : '585px',
          }}
        >
          <Container fluid>
            <Row>
              <Col md={10} css={padding({ size: 0 })}>
                <PostDescription info={info} align="start" justify="start" />
              </Col>
            </Row>
          </Container>
          <Title
            level="4"
            weight="400"
            lineHeight="2.243"
            css={padding({ bottom: 'md' })}
          >
            ¿Qué pasó con estos grandes futbolistas de la selección Sub-17
            México? La 18 te sorprenderá
          </Title>
          <Paragraph
            lineHeight="1.5"
            weight="300"
            css={padding({ bottom: 'xl' })}
          >
            This chapter will be about getting started with Git. We will begin
            by explaining some background on version control tools, then move on
            to how to get Git running on your system and finally how to get it
            set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd
            jsdjjjjjj
          </Paragraph>
          <AuthorDescription />
        </Col>
      </PostRow>
    </StyledMiniPost>
  );
};

export default MiniPost;
