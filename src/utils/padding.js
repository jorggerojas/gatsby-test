import { css } from 'styled-components';
import config from './config';

const { spacing, display } = config;
const padding = ({
  size = null,
  vertical = null,
  horizontal = null,
  left = null,
  right = null,
  bottom = null,
  top = null,
  dis = false,
  mob = false
}) => {
  let l = '0px';
  let b = '0px';
  let t = '0px';
  let r = '0px';

  if (dis) {
    if (size !== null && display[mob ? 'mobile' : 'desktop'][size]) {
      l = display[mob ? 'mobile' : 'desktop'][size];
      r = display[mob ? 'mobile' : 'desktop'][size];
      b = display[mob ? 'mobile' : 'desktop'][size];
      t = display[mob ? 'mobile' : 'desktop'][size];
    }
    if (vertical !== null && display[mob ? 'mobile' : 'desktop'][vertical]) {
      b = display[mob ? 'mobile' : 'desktop'][vertical];
      t = display[mob ? 'mobile' : 'desktop'][vertical];
    }
    if (horizontal !== null && display[mob ? 'mobile' : 'desktop'][horizontal]) {
      l = display[mob ? 'mobile' : 'desktop'][horizontal];
      r = display[mob ? 'mobile' : 'desktop'][horizontal];
    }
    if (top !== null && display[mob ? 'mobile' : 'desktop'][top]) {
      t = display[mob ? 'mobile' : 'desktop'][top];
    }
    if (bottom !== null && display[mob ? 'mobile' : 'desktop'][bottom]) {
      b = display[mob ? 'mobile' : 'desktop'][bottom];
    }
    if (left !== null && display[mob ? 'mobile' : 'desktop'][left]) {
      l = display[mob ? 'mobile' : 'desktop'][left];
    }
    if (right !== null && display[mob ? 'mobile' : 'desktop'][right]) {
      r = display[mob ? 'mobile' : 'desktop'][right];
    }
  } else {
    if (size !== null && spacing[size]) {
      l = spacing[size];
      r = spacing[size];
      b = spacing[size];
      t = spacing[size];
    }
    if (vertical !== null && spacing[vertical]) {
      b = spacing[vertical];
      t = spacing[vertical];
    }
    if (horizontal !== null && spacing[horizontal]) {
      l = spacing[horizontal];
      r = spacing[horizontal];
    }
    if (top !== null && spacing[top]) {
      t = spacing[top];
    }
    if (bottom !== null && spacing[bottom]) {
      b = spacing[bottom];
    }
    if (left !== null && spacing[left]) {
      l = spacing[left];
    }
    if (right !== null && spacing[right]) {
      r = spacing[right];
    }
  }
  return css`
    padding: ${t} ${r} ${b} ${l} !important;
  `;
};

export default padding;
