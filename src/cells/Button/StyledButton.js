import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-family: DM Sans;
  border: 1px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 13.32px;
  background-color: transparent;
  padding: 9px 20px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  ${props =>
    props.size === 'sm' &&
    css`
      padding: 9px 11px;
      font-size: 11px;
    `}

  ${props =>
    props.size === 'lg' &&
    css`
      padding: 12px 33px;
      font-size: 16px;
    `}
`;
export default StyledButton;
