import styled from 'styled-components';

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.77rem'};
  color: ${({ color }) => color || '#000'};
  @media (min-width: 1441px) {
    h1 {
      font-size: ${({ level }) => getFontSize(level || '1', true)};
    }
  }
`;

const getFontSize = (level, max = false) => {
  switch (level) {
    case '1':
    default:
      return `clamp(30.608px, calc(1.913rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.01px) * 3.6103)), 82.56px);`;
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
