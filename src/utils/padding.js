import { css } from 'styled-components';
import config from './config';

const { display, breakpoints } = config;

const sizes = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
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

  // clamp(3.012rem, calc(3.012rem + (5.16 - 3.012) * ((100vw - 20rem) / (90 - 20))), 5.16rem);
  // preferred = calc(min + (max - min) * ((100vw - minbreakpoint) / (maxbreakpoint - minbreakpoint)))
  if (size === 'none') {
    return css`
      padding: 0;
    `;
  }
  let min = '2.968rem';
  let max = '3.583rem';
  let minbreakpoint = breakpoints.xs;
  let maxbreakpoint = breakpoints.lg;

  if (size !== null && sizes.includes(size)) {
    min = display['mobile'][size];
    max = display['desktop'][size];
    l = getClamp(min, max, minbreakpoint, maxbreakpoint);
    r = getClamp(min, max, minbreakpoint, maxbreakpoint);
    b = getClamp(min, max, minbreakpoint, maxbreakpoint);
    t = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }

  if (vertical !== null && sizes.includes(vertical)) {
    min = display['mobile'][vertical];
    max = display['desktop'][vertical];
    b = getClamp(min, max, minbreakpoint, maxbreakpoint);
    t = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }

  if (horizontal !== null && sizes.includes(horizontal)) {
    min = display['mobile'][horizontal];
    max = display['desktop'][horizontal];
    l = getClamp(min, max, minbreakpoint, maxbreakpoint);
    r = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }

  if (top !== null && sizes.includes(top)) {
    min = display['mobile'][top];
    max = display['desktop'][top];
    t = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }
  if (bottom !== null && sizes.includes(bottom)) {
    min = display['mobile'][bottom];
    max = display['desktop'][bottom];
    b = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }
  if (left !== null && sizes.includes(left)) {
    min = display['mobile'][left];
    max = display['desktop'][left];
    l = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }
  if (right !== null && sizes.includes(right)) {
    min = display['mobile'][right];
    max = display['desktop'][right];
    r = getClamp(min, max, minbreakpoint, maxbreakpoint);
  }

  return css`
    padding-top: ${t};
    padding-bottom: ${b};
    padding-right: ${r};
    padding-left: ${l};
  `;
};

/**
 * 
 clamp(
   3.012rem, 
  calc(calc(3.012rem + (5.16 - 3.012)) * calc(((100vw - 20rem) / (90rem - 20rem)))
    , 5.16rem)
 */

//  clamp(3.012rem,
//    calc(3.012rem + ((1vw - 0.2rem) * 5.1143)), 5.16rem);

const getClamp = (min_rem, max_rem, minbreakpoint_rem, maxbreakpoint_rem) => {
  // convert to actual numbers 12rem -> 10

  let r = `clamp(${min_rem}, calc(${min_rem} + (${convertUnitsToNumber(
    max_rem,
  )} - ${convertUnitsToNumber(
    min_rem,
  )}) * ((100vw - ${minbreakpoint_rem}) / (${convertUnitsToNumber(
    maxbreakpoint_rem,
  )} - ${convertUnitsToNumber(minbreakpoint_rem)}))), ${max_rem});`;
  return r;
};

const convertUnitsToNumber = (rem_px_unit) => {
  // 13rem -> 13
  // 13px -> 13
  // 13em -> 13
  if (rem_px_unit.endsWith('rem')) {
    return rem_px_unit.split('rem')[0];
  } else if (rem_px_unit.endsWith('px')) {
    return rem_px_unit.split('px')[0];
  } else if (rem_px_unit.endsWith('em')) {
    return rem_px_unit.split('em')[0];
  }
};
export default padding;
