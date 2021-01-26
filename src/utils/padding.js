import { css } from 'styled-components';
import config from './config';

const {spacing, display} = config;
const padding = ({
  size = null,
  vertical = null,
  horizontal = null,
  left = null,
  right = null,
  bottom = null,
  top = null,
  dis = false
}) => {
  let l = '0px';
  let b = '0px';
  let t = '0px';
  let r = '0px';

  if(dis){
    if (size !== null && display[size]) {
      l = display[size];
      r = display[size];
      b = display[size];
      t = display[size];
    }
    if (vertical !== null && display[vertical]) {
      b = display[vertical];
      t = display[vertical];
    }
    if (horizontal !== null && display[horizontal]) {
      l = display[horizontal];
      r = display[horizontal];
    }
    if (top !== null && display[top]) {
      t = display[top];
    }
    if (bottom !== null && display[bottom]) {
      b = display[bottom];
    }
    if (left !== null && display[left]) {
      l = display[left];
    }
    if (right !== null && display[right]) {
      r = display[right];
    }
  }else{
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
