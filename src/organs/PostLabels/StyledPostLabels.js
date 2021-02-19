import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledPostLabels = styled(Container)`
  padding:0;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  flex-direction: ${({ direction }) => direction || 'row'};
  @media (max-width: 788px) {
    width: 100%;
  }
`;

export default StyledPostLabels;
