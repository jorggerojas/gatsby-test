import { css } from 'styled-components';
import config from './config';

const spacings = config.spacing;
const padding = ({
  size = null,
  vertical = null,
  horizontal = null,
  left = null,
  right = null,
  bottom = null,
  top = null,
}) => {
  let l = '0px';
  let b = '0px';
  let t = '0px';
  let r = '0px';

  if (size !== null && spacings[size]) {
    l = spacings[size];
    r = spacings[size];
    b = spacings[size];
    t = spacings[size];
  }

  if (vertical !== null && spacings[vertical]) {
    b = spacings[vertical];
    t = spacings[vertical];
  }

  if (horizontal !== null && spacings[horizontal]) {
    l = spacings[horizontal];
    r = spacings[horizontal];
  }

  if (top !== null && spacings[top]) {
    t = spacings[top];
  }
  if (bottom !== null && spacings[bottom]) {
    b = spacings[bottom];
  }
  if (left !== null && spacings[left]) {
    l = spacings[left];
  }
  if (right !== null && spacings[right]) {
    r = spacings[right];
  }

  return css`
    padding: ${t} ${r} ${b} ${l} !important;
  `;
};

export default padding;
