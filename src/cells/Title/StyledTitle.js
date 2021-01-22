import styled from 'styled-components';
import config from '../../utils/config';

const { text } = config;
const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.77'}rem;
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media (min-width: 1001px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: ${({ level }) => getFontSize(level || '1', true)};
    }
  }
`;

const getFontSize = (level, max = false) => {
  switch (level) {
    case '1':
    default:
      return `clamp(1.913rem, calc(1.913rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } -16) * 3.6103)),5.16rem);`;
    case '2':
      return `clamp(1.793rem, calc(1.793rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.7875)), 4.3rem);`;
    case '3':
      return `clamp(1.68rem, calc(1.68rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.1159)), 3.583rem);`;
    case '4':
    case '5':
    case '6':
      return `clamp(1.575rem, calc(1.575rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 1.5689)), 2.986rem);`;
  }
};

export default StyledTitle;
