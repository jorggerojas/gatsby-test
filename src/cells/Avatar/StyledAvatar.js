import styled from 'styled-components';
const StyledAvatar = styled.img`
  border-radius: 100%;
  display: inline-block;
  height: 50px;
  width: 50px;
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

export default StyledAvatar;
