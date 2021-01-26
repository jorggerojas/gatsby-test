import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../utils/config';

const { display } = config;

const StyledMiniPost = styled(Container)`
    margin: 0;
    padding: ${display.mobile.sm} 0;
    @media (min-width: 992px) {
        padding: ${display.desktop.sm} 0;
    }
    @media (min-width: 1440px) {
        padding: ${display.desktop.sm} 0;
    }
`;

export default StyledMiniPost;