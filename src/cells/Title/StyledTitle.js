import styled from 'styled-components';
import config from '../../utils/config';

const { text } = config;
const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  line-height: ${({ lineHeight }) => lineHeight || '1.77'}rem;
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media (min-width: 1000px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: ${({ level }) => getFontSize(level || '1', true)} !important;
    }
    line-height: ${({ lineHeight }) =>
      `calc(${lineHeight}rem * 1.3)` || '1.99rem'} !important;
  }
`;

const getFontSize = (level, max = false) => {
  switch (level) {
    case '1':
    default:
      return `clamp(1.467rem, calc(1.467rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 1.1352)), 2.488rem);`;
    case '2':
      return `clamp(1.383rem, calc(1.383rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.7683)), 2.074rem);`;
    case '3':
      return `clamp(1.296rem, calc(1.296rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.4803)), 1.728rem);`;
    case '4':
      return `clamp(1.215rem, calc(1.215rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.2502)), 1.44rem);`;
    case '5':
    case '6':
      return `clamp(1.138rem, calc(1.138rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.0689)), 1.2rem);`;
  }
};

export default StyledTitle;
