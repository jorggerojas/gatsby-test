import styled, { css } from 'styled-components';
import config from '../../utils/config';
import { SIZE, FONT_SIZE, LINE_HEIGHT } from './constants';
const spacing = config.spacing;

const StyledButton = styled.button`
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: 1px solid ${(props) => props.colors.default};
  border-radius: 2px;
  box-sizing: border-box;
  background-color: ${(props) => props.colors.default};
  transition: all 0.3s ease-out;
  text-align: center;
  vertical-align: middle;
  ${(props) => getPadding(props)}
  ${(props) => getFontStyle(props)}

  &:disabled {
    background-color: lightgrey;
    color: grey;
    border: none;
  }

  // just hover
  &:not([disabled]):hover {
    background-color: ${(props) => props.colors.hover};
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 0.15rem ${(props) => props.colors.default};
    outline: 0;
  }

  &:active {
    background-color: ${(props) => props.colors.click};
  }

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  span {
    display: inline-flex;
  }

  .button-icon-span {
    margin-right: ${(p) => (p.isIconOnly ? '0' : '0.5em')};
    align-items: center;
    ${(props) => getSpanIconHeight(props.size)}
  }
`;
const getSpanIconHeight = (size) => {
  let h = '1em';
  switch (size) {
    case SIZE.small:
      h = LINE_HEIGHT.small;
      break;
    case SIZE.large:
      h = LINE_HEIGHT.large;

    default:
      h = LINE_HEIGHT.default;

      break;
  }
  return css`
    height: ${h};
  `;
};
const getPadding = (props) => {
  let padding = '';
  if (!props.isIconOnly) {
    // not icon at all
    switch (props.size) {
      case SIZE.small:
        padding = `9px ${spacing.sm}`;
        break;
      case SIZE.large:
        padding = `12px ${spacing.lg}`;
        break;
      case SIZE.default:
      default:
        padding = `9px ${spacing.md}`;
        break;
    }
  } else {
    switch (props.size) {
      case SIZE.small:
        padding = `9px ${spacing.tiny}`;
        break;
      case SIZE.large:
        padding = `12px ${spacing.md}`;
        break;
      case SIZE.default:
      default:
        padding = `9px ${spacing.sm}`;
        break;
    }
  }
  return css`
    padding: ${padding};
  `;
};

const getFontStyle = (props) => {
  let fontSize = FONT_SIZE.default;
  let lineHeight = LINE_HEIGHT.default;

  switch (props.size) {
    case SIZE.small:
      fontSize = FONT_SIZE.small;
      lineHeight = LINE_HEIGHT.small;
      break;
    case SIZE.large:
      fontSize = FONT_SIZE.large;
      lineHeight = LINE_HEIGHT.large;
      break;
    default:
      break;
  }

  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};
export default StyledButton;
