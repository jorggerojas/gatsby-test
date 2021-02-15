import styled, { css } from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

const StyledHideable = styled.div`
  display: ${(p) => (p.after ? 'none' : 'contents')};
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

export default StyledHideable;
