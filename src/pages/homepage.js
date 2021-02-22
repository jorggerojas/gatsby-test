import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { Main } from '../organisms/Grid';
import { Container, Row, Col } from '../organisms/Grid';
import Title from '../cells/Title';
import Paragraph from '../cells/Paragraph';
import Spacer from '../cells/Spacer';
import Hideable from '../cells/Hideable';
import padding from '../utils/padding';
import GlobalStyle from '../utils/global';
import Card from '../organs/Card';
import Scroll from '../utils/locomotiveScroll';

import styled from 'styled-components';
const OverlapContainer = styled.div`
  width: 100%;
  position: relative;
  height: clamp(
    11.6395rem,
    calc(11.6395rem + (26.595 - 11.6395) * ((100vw - 20rem) / (48 - 20))),
    26.595rem
  );
  @media (min-width: 768px) {
    height: clamp(
      10.7515rem,
      calc(26.595rem + (10.7415 - 26.595) * ((100vw - 48rem) / (90 - 48))),
      26.595rem
    );
  }
  @media (min-width: 992px) {
    max-height: 10.7515rem;
  }
`;
const OverlapImageContainer = styled.div`
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => p.src});
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(
    100% +
      clamp(
        6.2475rem,
        calc(6.2475rem + (19.2585 - 6.2475) * ((100vw - 20rem) / (62 - 20))),
        19.2585rem
      )
      
  );
`;
const ColScroll = styled(Col)`
  .menu-item-wrapper {
    display: inline-flex !important;
    width: 35.625rem;
    padding-right: 2%;
  }
  @media (min-width: 992px) {
    .menu-item-wrapper {
      width: 48%;
    }
  }
  .menu-item-wrapper.active {
  }
  .menu-item.active {
  }

  .scroll-menu-arrow {
  }

  .scroll-menu-arrow--disabled {
    visibility: hidden;
  }
  .menu-wrapper {
  }
`;
const HomePage = (callbacks) => {
  const onSelect = (item) => {
    setSelected(item);
  };
  const [selected, setSelected] = useState(0);
  const list = [
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
    {
      title:
        'Identifica cuál es el verdadero costo de una pobre Identificación',
      to: '',
      type: 'blog',
      time: 7,
      excerpt:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev",
    },
  ];

  const menu = list.map((el, i) => {
    return (
      <Card
        key={`${i}-${el.title}`}
        title={el.title}
        to={el.to}
        type={el.type}
        time={el.time}
        excerpt={el.excerpt}
        selected={selected}
      />
    );
  });

  return (
    <>
      <GlobalStyle />
      <Scroll callbacks={callbacks} />

      <div data-scroll data-scroll-container>
        <Main
          style={{
            backgroundColor: '#e6dff1',
          }}
          css={padding({ top: 'xxl', bottom: 'xl' })}
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
            <Row justify="end" align="end" css={padding({ bottom: 'sm' })}>
              <Col sm={12} lg={10} xl={6}>
                <OverlapContainer data-scroll data-scroll-speed="0.9">
                  <OverlapImageContainer src="https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg"></OverlapImageContainer>
                </OverlapContainer>
              </Col>
              <Col style={{ alignItems: 'flex-end' }} lg={10} xl={6}>
                <Hideable visibleOn="lg" after={false}>
                  <Spacer size="xxl" />
                </Hideable>
                <Paragraph
                  lineHeight={1.41}
                  data-scroll
                  data-scroll-speed="1.1"
                >
                  WHAT WE DO
                </Paragraph>
                <Spacer size="lg" />
                <Title level="2" data-scroll data-scroll-speed="1">
                  We help your digital initiatives go from Point A to Point B in
                  the Fastest way possible.
                </Title>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} css={padding({ bottom: 'sm' })}>
                <Title level="4" data-scroll data-scroll-speed="1">
                  Define your digital strategy.
                </Title>
                <Paragraph data-scroll data-scroll-speed="1.1">
                  We come together and uncover your challenges. We identify
                  potential improvements with process automation or new product
                  development.
                </Paragraph>
              </Col>
              <Col sm={12} md={6}>
                <Title level="4" data-scroll data-scroll-speed="1">
                  Build your digital products.
                </Title>
                <Paragraph data-scroll data-scroll-speed="1.1">
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
            <Title level="D1" data-scroll data-scroll-speed="5">
              A Turnkey approach that goes beyond Pixels, Code, and
              Metadescriptions.
            </Title>
          </Container>
        </Main>
        <Main>
          <Container id="stick">
            <Title level="D1" data-scroll data-scroll-speed="0.5">
              A Turnkey approach that
            </Title>
            <Title level="D1" data-scroll data-scroll-speed="3">
              goes beyond Pixels, Code, Metadescriptions.
            </Title>
          </Container>
        </Main>
        <Main>
          <Container>
            <Row>
              <Col sm={12} xl={6} css={padding({ bottom: 'md' })}>
                <Paragraph size="lg" lineHeight="1.688">
                  CONTINUE READING
                </Paragraph>
                <Spacer size="lg" />
                <Title level="D2">Similar Articles</Title>
              </Col>
            </Row>
            <Row>
              <ColScroll>
                <ScrollMenu
                  data={menu}
                  selected={selected}
                  onSelect={onSelect}
                  translate={0}
                  itemsCount={menu.length}
                  wheel={false}
                />
              </ColScroll>
            </Row>
          </Container>
        </Main>
      </div>
    </>
  );
};

export default HomePage;
