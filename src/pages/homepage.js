import React from 'react';
import { Main } from '../organisms/Grid';
import { Container, Row, Col } from '../organisms/Grid';
import Title from '../cells/Title';
import Paragraph from '../cells/Paragraph';
import Spacer from '../cells/Spacer';
import padding from '../utils/padding';
import GlobalStyle from '../utils/global';
// import Scroll from '../utils/locomotiveScroll';
import styled from 'styled-components';

const OverlapImageContainer = styled.div`
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => p.src});
  bottom: 0;
  left: 0;
  height: 30rem;
  width: 100%;
  @media (max-width: 768px) {
    height: 15rem;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const HomePage = (callbacks) => {
  return (
    <>
      <GlobalStyle />
      {/* <Scroll callbacks={callbacks} /> */}

      <div data-scroll-container>
        <Main
          style={{
            backgroundColor: '#e6dff1',
          }}
        >
          <Container>
            <Row>
              <Col sm={3}></Col>
              <Col lg={9} css={padding({ bottom: 'sm' })}>
                <Title level="D2">
                  A viaduct is the fastest way to cross a valley
                </Title>
                <Title level="1">
                  (Viaducto is a new digital product studio)
                </Title>
              </Col>
            </Row>
            <Row>
              <Col sm={3}></Col>

              <Col lg={6}>
                <Paragraph>
                  We help startups and established organizations transform their
                  businesses through innovation and technology. We partner with
                  your company or start up in the creation of new products, and
                  the definition of your digital strategy.
                </Paragraph>
              </Col>
            </Row>
          </Container>
        </Main>
        <Main
          style={{ backgroundColor: '#fff1f7' }}
          css={padding({ vertical: 'xl' })}
        >
          <Container>
            <Row justify="between" align="end" css={padding({ bottom: 'sm' })}>
              <Col sm={12} lg={6}>
                <Container>
                  <OverlapImageContainer src="https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg"></OverlapImageContainer>
                </Container>
              </Col>
              <Col>
                <Paragraph lineHeight={1.41}>WHAT WE DO</Paragraph>
                <Spacer size="lg" />
                <Title level="2">
                  We help your digital initiatives go from Point A to Point B in
                  the Fastest way possible.
                </Title>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} css={padding({ bottom: 'sm' })}>
                <Title level="4">Define your digital strategy.</Title>
                <Paragraph>
                  We come together and uncover your challenges. We identify
                  potential improvements with process automation or new product
                  development.
                </Paragraph>
              </Col>
              <Col sm={12} md={6} css={padding({ bottom: 'sm' })}>
                <Title level="4">Build your digital products.</Title>
                <Paragraph>
                  We build web-based software and applications. We plan for the
                  future, build for your current stage and scheme to reduce time
                  to value.
                </Paragraph>
              </Col>
            </Row>
          </Container>
        </Main>
        <Main>
          <Container id="large-text">
            <Title
              level="D1"
              data-scroll
              data-scroll-speed="2"
              data-scroll-sticky
              data-scroll-target="#large-text"
            >
              A Turnkey approach that goes beyond Pixels, Code, and
              Metadescriptions.
            </Title>
          </Container>
        </Main>
        <Main>
          <Container id="stick">
            <Title
              level="D1"
              data-scroll
              data-scroll-speed="1"
              data-scroll-sticky
              data-scroll-target="#stick"
            >
              A Turnkey approach that
            </Title>
            <Title level="D1" data-scroll data-scroll-speed="1">
              goes beyond Pixels, Code,
            </Title>
            <Title level="D1" data-scroll data-scroll-speed="2">
              Metadescriptions.
            </Title>
          </Container>
        </Main>
        <Main>
          <Container>
            <Title level="D1" data-scroll data-scroll-speed="2">
              A Turnkey approach that goes beyond Pixels, Code, and
              Metadescriptions.
            </Title>
          </Container>
        </Main>
      </div>
    </>
  );
};

export default HomePage;
