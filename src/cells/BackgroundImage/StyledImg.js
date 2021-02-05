import styled from 'styled-components';

const StyledImg = styled.img`
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 144px;
  transition: height 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  @media (min-width: 576px) {
    height: 280px;
  }
  @media (min-width: 768px) {
    height: 328px;
  }
  @media (min-width: 992px) {
    height: 313px;
  }
  @media (min-width: 1440px) {
    height: 384px;
  }
`;
export default StyledImg;
