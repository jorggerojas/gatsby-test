import React from 'react';
import { Title } from '../cells/Title';
import { Paragraph } from '../cells/Paragraph'

export default () => {
  return (
    <>
      <Title>Title</Title>
      <Paragraph>JAJAJA</Paragraph>
      <div style={{ margin: 0, padding: 0, display: 'flex', alignItems: "start", justifyContent: 'space-between' }}>

        <div style={{
          width: "33%"
        }}>
          <Title>H1</Title>
          <Title level="2">H2</Title>
          <Title level="3">H3</Title>
          <Title level="4">H4</Title>
          <Title level="5">H5</Title>
          <Title level="6">H6</Title>
        </div>
        <div style={{
          width: "33%"
        }}>
          <Title align="center">H1</Title>
          <Title level="2" align="center">H2</Title>
          <Title level="3" align="center">H3</Title>
          <Title level="4" align="center">H4</Title>
          <Title level="5" align="center">H5</Title>
          <Title level="6" align="center">H6</Title>
        </div>
        <div style={{
          width: "33%"
        }}>
          <Title align="right">H1</Title>
          <Title level="2" align="right">H2</Title>
          <Title level="3" align="right">H3</Title>
          <Title level="4" align="right">H4</Title>
          <Title level="5" align="right">H5</Title>
          <Title level="6" align="right">H6</Title>
        </div>
      </div>
    </>
  );
};
