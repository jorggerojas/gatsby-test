import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerMiniPost = styled(Container)`
  padding: 0;
`;
const StyledMiniPost = styled(ContainerMiniPost)`
  display: ${({ cover }) => (cover === true ? '' : 'flex')};
  justify-content: center;
  margin: 0;
  width: 100%;
  transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
`;

export default StyledMiniPost;
