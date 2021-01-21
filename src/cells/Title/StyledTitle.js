import styled from 'styled-components';

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-size: ${({ level }) => getFontSize(level || '1')};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.77rem'};
  color: ${({ color }) => color || '#000'};
`;

const getFontSize = level => {
  switch (level) {
    case '1':
    default:
      return 'clamp(1.467rem, calc(1.467rem + ((1vw - 0.2rem) * 1.7674)), 3.2344rem);';
    case '2':
      return 'clamp(1.383rem, calc(1.383rem + ((1vw - 0.2rem) * 1.3132)), 2.6962rem);';
    case '3':
      return 'clamp(1.296rem, calc(1.296rem + ((1vw - 0.2rem) * 0.9504)), 2.2464rem);';
    case '4':
      return 'clamp(1.138rem, calc(1.138rem + ((1vw - 0.2rem) * 0.734)), 1.872rem);';
    case '5':
    case '6':
      return 'clamp(1.138rem, calc(1.138rem + ((1vw - 0.2rem) * 0.422)), 1.56rem);';
  }
};

export default StyledTitle;
