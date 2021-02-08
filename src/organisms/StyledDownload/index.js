import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import config from '../../utils/config';

const { breakpoints} = config;

export const DownloadRow = styled(Row)`
    height: 100%;
`;
export const StyledDownload = styled(Container)`
    overflow: hidden;
    background: #F8f8f8;
    height: clamp(27rem, calc(27rem + ((1vw - 0.000625rem) * 10.355)), 36.313rem);
    transition: all 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    @media (min-width: ${breakpoints.xl}) {
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((calc(1vw * 1.25) - 0.2rem) * 4.25)), 6.188rem);
        height: clamp(27rem, calc(27rem + ((calc(1vw * 1.125) - 0.000625rem) * 10.355)), 36.313rem);
    }
`;
export const DownloadColumn = styled(Col)`
    margin: 0;
    padding: 0;
    width: 100%;
`;