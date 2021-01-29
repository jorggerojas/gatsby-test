import React from 'react';
import styled, { css } from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

const StyledHideable = styled.div`
  display: none;

  ${p =>p.visibleOn !== null && getVisibility(p.visibleOn, p.display)}
`;

const getVisibility = (visibleOn) => {
  let breakpoint = breakpoints[visibleOn]
  return css`
    @media (min-width: ${breakpoint}) {
     display: contents;
    }
  `;
};
/**
 * Component hidden by default that receives a breakpoint from which
 * it's gonna be visible
 * @param {string} visibleOn Breakpoint from which it's gonna be visible
 * @param {string} display display value block or inline
 */
const Hideable = ({ visibleOn = null, children }) => {
  if (visibleOn !== null && !breakpoints.hasOwnProperty(visibleOn)) {
    return null;
  }
  return <StyledHideable visibleOn={visibleOn} >{children}</StyledHideable>;
};

export default Hideable;
