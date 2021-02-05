import React from 'react';
import styled, { css } from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

const StyledHideable = styled.div`
  display: none;

  ${(p) => p.visibleOn !== null && getVisibility(p.visibleOn, p.after)}
`;

const getVisibility = (visibleOn, after) => {
  let breakpoint = breakpoints[visibleOn];

  if (after) {
    return css`
      @media (min-width: ${breakpoint}) {
        display: contents;
      }
    `;
  }
  return css`
    @media (max-width: ${breakpoint}) {
      display: contents;
    }
  `;
};
/**
 * Component hidden by default that receives a breakpoint from which
 * it's gonna be visible and a boolean that indicates if it's gonna be visible
 * after the specified breakpoint or before, undertand it like
   If after is assigned to false, it's gonna be visible at the beginning
   and hidden after the specified breakpoint,
 * @param {string} visibleOn Breakpoint from which it's gonna be visible
 * @param {string} display display value block or inline
 * @param {boolean} after visible after the breakpoint, defaults to true
 */
const Hideable = ({ visibleOn = null, after = true, children }) => {
  if (visibleOn !== null && !breakpoints.hasOwnProperty(visibleOn)) {
    return null;
  }
  return (
    <StyledHideable visibleOn={visibleOn} after={after}>
      {children}
    </StyledHideable>
  );
};

export default Hideable;
