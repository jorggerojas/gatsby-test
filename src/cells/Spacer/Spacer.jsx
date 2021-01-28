import React from 'react';
import config from '../../utils/config';
import styled from 'styled-components';
const { spacing } = config;

const Box = styled.div`
  width: ${(p) => (p.direction === 'horizontal' ? spacing[p.size] : '100%')};
  height: ${(p) => (p.direction === 'vertical' ? spacing[p.size] : '100%')};
  display: ${(p) => (p.direction === 'vertical' ? 'block' : 'inline-block')};
`;
const Spacer = ({ size, direction = 'vertical' }) => {
  return <Box size={size} direction={direction}></Box>;
};

export default Spacer;
