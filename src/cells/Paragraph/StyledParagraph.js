import styled from 'styled-components';
import config from '../../utils/config';

const { text } = config;
const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  margin-inline-start: ${({ marginInline }) => marginInline || '0'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ bold }) => bold || '400'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  font-size: ${({ size }) =>
    size ? (size === 'sm' ? '0.83rem' : '1.2rem') : '1rem'};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.77'};
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media (min-width: 1000px) {
    p {
      font-size: ${({ size }) =>
        size
          ? size === 'sm'
            ? 'calc(1.125 * 0.83rem)'
            : 'calc(1.125 * 1.2rem)'
          : 'calc(1.125 * 1rem)'};
    }
  }
  @media screen and (max-width: 320px) {
    display: ${({ hide }) => (hide === 'xsm' ? 'none' : '')};
  }
  @media screen and (max-width: 576px) {
    display: ${({ hide }) => (hide === 'sm' ? 'none' : '')};
  }
  @media screen and (max-width: 768px) {
    display: ${({ hide }) => (hide === 'm' ? 'none' : '')};
  }
  @media screen and (max-width: 992px) {
    display: ${({ hide }) => (hide === 'l' ? 'none' : '')};
  }
  @media screen and (max-width: 1200px) {
    display: ${({ hide }) => (hide === 'xl' ? 'none' : '')};
  }
  @media screen and (max-width: 1444px) {
    display: ${({ hide }) => (hide === 'xxl' ? 'none' : '')};
  }
`;
export default StyledParagraph;