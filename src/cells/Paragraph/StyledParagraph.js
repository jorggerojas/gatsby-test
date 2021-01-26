import styled from 'styled-components';
import config from '../../utils/config';

const { text } = config;
const StyledParagraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ family }) => family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-style: normal;
  margin-inline-start: ${({ marginInline }) => marginInline || '0'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ bold }) => bold || '400'};
  letter-spacing: ${({ spacing }) => spacing || '0'}rem;
  font-size: ${({ size }) => getSize(size)};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => `${lineHeight}` || '1.77rem'};
  color: ${({ color }) => (color ? text[color] : text['dark'])};
  @media (min-width: 1440px) {
    p {
      font-size: ${({ size }) => getSize(size, true)};
    }
  }
  @media screen and (max-width: 320px) {
    display: ${({ hide }) => (hide === 'xs' ? 'none' : '')};
  }
  @media screen and (max-width: 576px) {
    display: ${({ hide }) => (hide === 'sm' ? 'none' : '')};
  }
  @media screen and (max-width: 791px) {
    display: ${({ hide }) => (hide === 'md' ? 'none' : '')};
  }
  @media screen and (max-width: 992px) {
    display: ${({ hide }) => (hide === 'lg' ? 'none' : '')};
  }
  @media screen and (max-width: 1200px) {
    display: ${({ hide }) => (hide === 'xl' ? 'none' : '')};
  }
  @media screen and (max-width: 1444px) {
    display: ${({ hide }) => (hide === 'xxl' ? 'none' : '')};
  }
`;

const getSize = (size = 'md', max = false) => {
  switch (size) {
    case 'xxs':
      return max ? 'calc(0.5rem * 1.125)' : '0.5rem';
    case 'xs':
      return max ? 'calc(0.694rem * 1.125)' : '0.694rem';
    case 'sm':
      return max ? 'calc(0.83rem * 1.125)' : '0.83rem';
    case 'lg':
      return max ? 'calc(1.2rem * 1.125)' : '1.2rem';
    case 'md':
    default:
      return max ? 'calc(1rem * 1.125)' : '1rem';
  }
}
export default StyledParagraph;
export { getSize };
