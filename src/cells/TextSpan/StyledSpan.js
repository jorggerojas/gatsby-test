import styled from 'styled-components';
import config from '../../utils/config';

const { text, breakpoints } = config;
export const StyledSpan = styled.span`
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  margin-inline-start: ${({ marginInline }) => marginInline || '0'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ bold }) => bold || '400'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  font-size: inherit;
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}rem` : '1.77rem'};
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  columns: 0 1;
  @media screen and (min-width: ${breakpoints.md}) {
    columns: ${({ columns }) => columns ? `1rem ${columns}` : "0 1"};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: inherit;
    line-height: ${({ lineHeight }) => lineHeight ?
    `calc(${lineHeight}rem * 1.125)` : 'calc(1.77rem * 1.125)'};
    columns: ${({ columns }) => columns ? `calc(1rem * 1.125) ${columns}` : "0 1"};
  }
  @media screen and (max-width: ${breakpoints.xs}) {
    display: ${({ hide }) => (hide === 'xs' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    display: ${({ hide }) => (hide === 'sm' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.md}) {
    display: ${({ hide }) => (hide === 'md' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.lg}) {
    display: ${({ hide }) => (hide === 'lg' ? 'none' : '')};
  }
  @media screen and (max-width: ${breakpoints.xl}) {
    display: ${({ hide }) => (hide === 'xxl' ? 'none' : '')};
  }
`;