import styled from 'styled-components';

const TitleStyle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '120%'};
  color: ${({ color }) => color || '#000'};
`;

const getFontSize = level => {
  switch (level) {
    case '1':
      return 'clamp(1.2rem, 3vw, 3rem)'; /*Le estoy moviendo aquí*/
    case '2':
      return 'clamp(1.338rem, 2.074rem, calc(2.047rem * 1.1228)) ';
    case '3':
      return 'clamp(1.296rem, 1.728rem, calc(1.728rem * 1.1228)) ';
    case '4':
      return 'clamp(1.215rem, 1.440rem, calc(1.440rem * 1.1228)) ';
    case '5':
      return 'clamp(1.138rem, 1.200rem, calc(1.200rem * 1.1228)) ';
    case '6':
      return 'clamp(1.138rem, 1.200rem, calc(1.200rem * 1.1228)) ';
    default:
      return 'clamp(calc(2.488rem * 1.067), 2.488rem, 6.047rem)';
  }
};

export default TitleStyle;
