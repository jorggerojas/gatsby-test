import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../utils/config';

const { display, breakpoints } = config;
const ContainerMiniPost = styled(Container)`
  padding: 0 !important;
`;
const StyledMiniPost = styled(ContainerMiniPost)`
  display: ${({ cover }) => cover === 'true' ? '' : 'flex'};
  justify-content: center;
  margin: 0;
  width: 100%;
  padding: ${({ cover }) => cover === 'true' ? '0' : `${display.mobile.sm} 0 !important`};
  transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  @media (min-width: ${breakpoints.lg}) {
    padding: ${({ cover }) => cover === 'true' ? '0' : `${display.desktop.sm} 0 !important`};
  }
  @media (min-width: ${breakpoints.xl}) {
    padding: ${({ cover }) => cover === 'true' ? '0' : `${display.desktop.sm} 0 !important`};
  }
`;

export default StyledMiniPost;
