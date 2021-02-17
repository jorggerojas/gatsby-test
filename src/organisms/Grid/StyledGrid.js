import styled, { css } from 'styled-components';
import { setConfiguration } from 'react-grid-system';

import padding from '../../utils/padding';

setConfiguration({
  gutterWidth: 28,
  containerWidths: [320, 576, 768, 992, 1440],
  breakpoints: [320, 576, 768, 992, 1440],
  maxScreenClass: 'xxl',
});

/**
 * Main component wraps the whole structure of the grid
 * @param {Boolean} fit Fit height size to the content or set the height;
 */
export const Main = styled.div`
  width: 100%;
  ${padding({ vertical: 'xxl' })}
`;

/**
 * @function verticalAlign
 * @param {String} align Set the vertical align of the component
 */
export const verticalAlign = (align) => {
  switch (align) {
    case 'top':
      return css`
        align-items: flex-start;
      `;
    case 'bottom':
      return css`
        align-items: flex-end;
      `;
    case 'center':
    default:
      return css`
        align-items: center;
      `;
  }
};
