import styled from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

export const StyledColumn = styled.div`
    column-count: 1;
    @media screen and (min-width: ${({ size }) => breakpoints[size]}) {
        column-count: ${({ columns }) => columns ? `${columns}` : "1"};       
        column-gap: 2rem;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
        column-count: ${({ columns }) => columns ? `${columns}` : "1"};       
        column-gap: calc(2rem * 1.125);
    }
`;