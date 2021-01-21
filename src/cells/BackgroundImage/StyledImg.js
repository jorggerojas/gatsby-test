import styled from 'styled-components';

const StyledImg = styled.img`
  background-size: cover;
  width: 100%;
  height: 144px;
  @media (min-width: 576px) {
    height: 280px;
  }
  @media (min-width: 768px) {
    height: 328px;
  }
  @media (min-width: 992px) {
    height: 313px;
  }
`;
export default StyledImg;
