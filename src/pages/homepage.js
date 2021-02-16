import React, { useRef, useEffect } from 'react';
import { Main } from '../organisms/Grid';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Title from '../cells/Title';
import Paragraph from '../cells/Paragraph';
import Spacer from '../cells/Spacer';
import padding from '../utils/padding';
import GlobalStyle from '../utils/global';
import LocomotiveScroll from 'locomotive-scroll';
setConfiguration({
  maxScreenClass: 'xl',
  breakpoints: [320, 576, 768, 992, 1440],
  containersWidth: [320, 576, 768, 992, 1440],
});

const HomePage = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 1,
    });
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  });
  return (
    <div ref={scrollRef}>
      <GlobalStyle />
      <Main
        style={{
          backgroundColor: '#e6dff1',
        }}
      >
        <Container>
          <Row nogutter>
            <Col sm={3}></Col>
            <Col lg={9}>
              <Row nogutter css={padding({ bottom: 'sm' })}>
                <Title
                  level="D2"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-position="top"
                >
                  A viaduct is the fastest way to cross a valley
                </Title>
                <Title
                  level="1"
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                >
                  (Viaducto is a new digital product studio)
                </Title>
              </Row>
            </Col>
          </Row>
          <Row nogutter>
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
      <Main style={{ backgroundColor: '#fff1f7' }}>
        <Container>
          <Row
            justify="between"
            align="end"
            css={padding({ bottom: 'sm' })}
            nogutter
          >
            <Col>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '30rem',
                  width: '100%',
                  backgroundSize: 'cover',
                  backgroundImage:
                    'url(https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg)',
                }}
              ></div>
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
          <Row nogutter>
            <Col>
              <Title level="4">Define your digital strategy.</Title>
              <Paragraph>
                We come together and uncover your challenges. We identify
                potential improvements with process automation or new product
                development.
              </Paragraph>
            </Col>
            <Col>
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
    </div>
  );
};

export default HomePage;
