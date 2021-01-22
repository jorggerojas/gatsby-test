import styled from 'styled-components';
import config from '../../utils/config';

const display = config.display;

const StyledIntroBlog = styled.section`
  padding-bottom: 48px;
  padding-top: 48px;
  @media (min-width: 992px) {
    padding-top: 65px;
    padding-left: 160px;
    padding-bottom: 47px;
  }
  @media (min-width: 1440px) {
    padding-top: ${display.sm};
    padding-bottom: ${display.sm};
    padding-left: ${display.sm};
  }
`;

export default StyledIntroBlog;
