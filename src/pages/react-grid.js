import React from 'react';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
// import BackgroundImage from '../cells/BackgroundImage';
import Spacer from '../cells/Spacer';
import Paragraph from '../cells/Paragraph';
import Title from '../cells/Title';
import { Main } from '../organisms/Grid';
import Card from '../organs/Card';

setConfiguration({
  maxScreenClass: 'xl',
  breakpoints: [320, 576, 768, 992, 1440],
  containersWidth: [320, 576, 768, 992, 1440],
});

const st = {
  backgroundColor: 'white',
};

const backgroundImageStyle = (src) => {
  return {
    backgroundSize: 'cover',
    backgroundImage: `url(${src})`,
  };
};

const border = { border: '1px solid grey' };
const ReactGridPage = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>Renglón con gutter</Row>
          <Row>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
          </Row>
          <Row>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
          </Row>
          <Row>Renglón sin gutter</Row>
          <Row nogutter>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
            <Col style={border}>a</Col>
          </Row>
          <Row nogutter>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
            <Col>a</Col>
          </Row>
        </Container>
      </Main>

      <Main>
        <Container style={st}>
          <Row justify="between">
            <Col style={border} sm={12} md={6} xl={6}>
              <Paragraph>
                Baby Monitoring Technology and more stuff!!!!!!
              </Paragraph>
              <Title level="1">
                Baby Monitoring Technology and more stuff!!!!!!
              </Title>
              <Spacer size="lg" />
            </Col>
            <Col style={border} sm={12} md={6} xl={4}>
              <Title level="D1">70+</Title>
              <Paragraph size="sm">
                Can you imagine what we will be downloading in another twenty
              </Paragraph>
              <Spacer size="lg" />
            </Col>
          </Row>
          <Row
            justify="end"
            style={backgroundImageStyle(
              'https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg',
            )}
          >
            <Col sm={12} lg={4} style={border}>
              <Container
                nogutter
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem 1.188rem',
                }}
              >
                <Card
                  src=""
                  title="Identifica cuál es el verdadero costo de una pobre identidicación"
                  type="blog"
                  time={7}
                  to=""
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Main>
      <Spacer size="lg" />

      <Main>
        <Container style={st}>
          <Row justify="between">
            <Col sm={12} md={6} xl={6}>
              <Paragraph>
                Baby Monitoring Technology and more stuff!!!!!!
              </Paragraph>
              <Title level="1">
                Baby Monitoring Technology and more stuff!!!!!!
              </Title>
              <Spacer size="lg" />
            </Col>
            <Col sm={12} md={6} xl={4}>
              <Title level="D1">70+</Title>
              <Paragraph size="sm">
                Can you imagine what we will be downloading in another twenty
              </Paragraph>
              <Spacer size="lg" />
            </Col>
          </Row>
          <Row
            justify="end"
            style={backgroundImageStyle(
              'https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg',
            )}
          >
            <Col sm={12} lg={4}>
              <Container
                nogutter
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem 1.188rem',
                }}
              >
                <Card
                  src=""
                  title="Identifica cuál es el verdadero costo de una pobre identidicación"
                  type="blog"
                  time={7}
                  to=""
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Main>
      <Spacer size="lg" />

      <Main>
        <Container style={st}>
          <Row nogutter justify="between">
            <Col style={border} sm={12} md={6} xl={6}>
              <Paragraph>
                Baby Monitoring Technology and more stuff!!!!!!
              </Paragraph>
              <Title level="1">
                Baby Monitoring Technology and more stuff!!!!!!
              </Title>
              <Spacer size="lg" />
            </Col>
            <Col style={border} sm={12} md={6} xl={4}>
              <Title level="D1">70+</Title>
              <Paragraph size="sm">
                Can you imagine what we will be downloading in another twenty
              </Paragraph>
              <Spacer size="lg" />
            </Col>
          </Row>
          <Row
            nogutter
            justify="end"
            style={backgroundImageStyle(
              'https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg',
            )}
          >
            <Col sm={12} lg={4} style={border}>
              <Container
                fluid
                nogutter
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem 1.188rem',
                }}
              >
                <Card
                  src=""
                  title="Identifica cuál es el verdadero costo de una pobre identidicación"
                  type="blog"
                  time={7}
                  to=""
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Main>
      <Spacer size="lg" />

      <Main>
        <Container style={st}>
          <Row nogutter justify="between">
            <Col sm={12} md={6} xl={6}>
              <Paragraph>
                Baby Monitoring Technology and more stuff!!!!!!
              </Paragraph>
              <Title level="1">
                Baby Monitoring Technology and more stuff!!!!!!
              </Title>
              <Spacer size="lg" />
            </Col>
            <Col sm={12} md={6} xl={4}>
              <Title level="D1">70+</Title>
              <Paragraph size="sm">
                Can you imagine what we will be downloading in another twenty
              </Paragraph>
              <Spacer size="lg" />
            </Col>
          </Row>
          <Row
            nogutter
            justify="end"
            style={backgroundImageStyle(
              'https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg',
            )}
          >
            <Col sm={12} lg={4}>
              <Container
                fluid
                nogutter
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem 1.188rem',
                }}
              >
                <Card
                  src=""
                  title="Identifica cuál es el verdadero costo de una pobre identidicación"
                  type="blog"
                  time={7}
                  to=""
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default ReactGridPage;
