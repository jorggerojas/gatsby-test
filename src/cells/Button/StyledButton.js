import styled, { css } from 'styled-components';
import config from '../../utils/config';

const spacing = config.spacing;

const StyledButton = styled.button`
  align-items: center;
  border: 1px solid ${(props) => props.colors.default};
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: ${(props) => props.colors.default};
  padding: 9px ${spacing.md};
  transition: all 0.3s ease-out;
  line-height: 1;

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
    props.size === 'sm' &&
    css`
      padding: 9px ${spacing.sm};
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.size === 'lg' &&
    css`
      padding: 12px ${spacing.lg};
      font-size: 1.25rem;
    `}

    ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}

  span {
    display: inline-block;
    height: 1em;
  }

  svg {
    stroke: black;
    display: inline-block;
    vertical-align: middle;
    transition: transform 0.2s;
    height: 100%;
  }
`;
export default StyledButton;
