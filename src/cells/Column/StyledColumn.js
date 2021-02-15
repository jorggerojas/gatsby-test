import styled from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

export const StyledColumn = styled.div`
    columns: 0 1;
    @media screen and (min-width: ${({ size }) => breakpoints[size]}) {
        columns: ${({ columns }) => columns ? `1rem ${columns}` : "0 1"};
    }
    @media screen and (min-width: ${breakpoints.xl}) {
        columns: ${({ columns }) => columns ? `calc(1rem * 1.125) ${columns}` : "0 1"};
    }
`;