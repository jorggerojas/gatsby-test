import styled, { css } from 'styled-components';
import config from '../../utils/config';

const spacing = config.spacing;

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: transparent;
  padding: 9px ${spacing.md};
  transition: all 0.3s ease-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  &:focus {
    box-shadow: 0 0 0 0.15rem black;
    outline: 0;
  }

  &:active {
    background-color: black;
    color: white;
  }

  ${props =>
    props.size === 'sm' &&
    css`
      padding: 9px ${spacing.sm};
      font-size: 0.875rem;
    `}

  ${props =>
    props.size === 'lg' &&
    css`
      padding: 12px ${spacing.lg};
      font-size: 1.25rem;
    `}
`;
export default StyledButton;
