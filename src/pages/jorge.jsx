import React from 'react';
import { Title } from '../cells/Title';

export default () => {
  return (
    <>
      <Title content="TITLE" />
      <div style={{ margin: 0, padding: 0, display: 'flex', alignItems: "start", justifyContent: 'space-between' }}>

        <div style={{
          width: "33%"
        }}>
          <Title content="H1" />
          <Title content="H2" level="2" />
          <Title content="H3" level="3" />
          <Title content="H4" level="4" />
          <Title content="H5" level="5" />
          <Title content="H6" level="6" />
        </div>
        <div style={{
          width: "33%"
        }}>
          <Title content="H1" align="center" />
          <Title content="H2" level="2" align="center" />
          <Title content="H3" level="3" align="center" />
          <Title content="H4" level="4" align="center" />
          <Title content="H5" level="5" align="center" />
          <Title content="H6" level="6" align="center" />
        </div>
        <div style={{
          width: "33%"
        }}>
          <Title content="H1" align="right" />
          <Title content="H2" level="2" align="right" />
          <Title content="H3" level="3" align="right" />
          <Title content="H4" level="4" align="right" />
          <Title content="H5" level="5" align="right" />
          <Title content="H6" level="6" align="right" />
        </div>
      </div>
    </>
  );
};
