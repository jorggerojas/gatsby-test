import React from 'react';
import { Title } from '../cells/Title';
import { Paragraph } from '../cells/Paragraph';
import { InputText, InputMail } from '../cells/Input';

const Jorge = () => {
  return (
    <>
      <Title>Headings & colors</Title>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          alignContent: 'space-around',
          justifyContent: 'space-around',
          flexWrap: 'no-wrap',
        }}
      >
        <Paragraph color="white">White</Paragraph>
        <Paragraph color="lightGray">Light-Gray</Paragraph>
        <Paragraph color="mutedGray">Muted-Gray</Paragraph>
        <Paragraph color="darkGray">Dark Gray</Paragraph>
        <Paragraph>Dark</Paragraph>
        <Paragraph color="primary">Primary</Paragraph>
        <Paragraph color="secondary">Secondary</Paragraph>
        <Paragraph color="info">Info</Paragraph>
        <Paragraph color="success">Success</Paragraph>
        <Paragraph color="warning">Warning</Paragraph>
        <Paragraph color="danger">Danger</Paragraph>
      </div>
      <div
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '33%',
          }}
        >
          <Title>H1</Title>
          <Title level="2">H2</Title>
          <Title level="3">H3</Title>
          <Title level="4">H4</Title>
          <Title level="5">H5</Title>
          <Title level="6">H6</Title>
        </div>
        <div
          style={{
            width: '33%',
          }}
        >
          <Title align="center">H1</Title>
          <Title level="2" align="center">
            H2
          </Title>
          <Title level="3" align="center">
            H3
          </Title>
          <Title level="4" align="center">
            H4
          </Title>
          <Title level="5" align="center">
            H5
          </Title>
          <Title level="6" align="center">
            H6
          </Title>
        </div>
        <div
          style={{
            width: '33%',
          }}
        >
          <Title align="right">H1</Title>
          <Title level="2" align="right">
            H2
          </Title>
          <Title level="3" align="right">
            H3
          </Title>
          <Title level="4" align="right">
            H4
          </Title>
          <Title level="5" align="right">
            H5
          </Title>
          <Title level="6" align="right">
            H6
          </Title>
        </div>
      </div>
      <div style={{
        margin: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px'
      }}>
        <Title>Inputs</Title>
        <Title level="2">Text</Title>
        <InputText size="sm" background label="sm background" />
        <InputText size="sm" placeholder="sm disabled" disabled />
        <InputText size="md" label="md no-background" />
        <InputText size="lg" background placeholder="lg background no-label" />
        <InputText size="default" placeholder="default-size (clamp) no-background no-label" />
        <InputText size="full" background label="full-sized background" />
      </div>
      <div style={{
        margin: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Title level="2">Mail</Title>
        <InputMail />
      </div>
    </>
  );
}
export default Jorge;