import styled from 'styled-components';
import config from '../../utils/config';

const { text } = config;
const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  text-align: left;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-size: clamp(
    0.833rem,
    calc(0.833rem + ((1vw - 0.000625rem) * 0.4081)),
    1.2rem
  );
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.77'}rem;
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media (min-width: 1000px) {
    p {
      font-size: clamp(
        0.833rem,
        calc(0.833rem + ((calc(1.125vw * 16) - 0.000625rem) * 0.4081)),
        1.2rem
      );
    }
  }
`;
export default StyledParagraph;
