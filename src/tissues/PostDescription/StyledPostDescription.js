import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledPostDescription = styled(Container)`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0;
  width:100%;
  flex-direction: ${({ direction }) => direction || 'row'};
`;

export default StyledPostDescription;
