import styled from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

export const StyledFrame = styled.div`
    width: ${({ width }) => width || '100%'};
    height: clamp(10.74rem, calc(10.74rem + ((1vw - 0.2rem) * 43.5857)), 41.25rem);
    margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    padding: 0 1rem;
    & iframe{
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: ${breakpoints.sm}){
       padding-left: 2rem;
       padding-right: 2rem;
    }
    @media screen and (min-width: ${breakpoints.md}){
        padding-left: clamp(6.188rem, calc(6.188rem + ((1vw - 0.48rem) * 9.8214)), 10.313rem);
        padding-right: clamp(6.188rem, calc(6.188rem + ((1vw - 0.48rem) * 9.8214)), 10.313rem);
    }
    @media screen and (min-width: ${breakpoints.xl}){
        padding-left: clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.125) - 0.48rem) * 9.8214)), 10.313rem);
        padding-right: clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.125) - 0.48rem) * 9.8214)), 10.313rem);
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((calc(1vw * 1.125) - 0.2rem) * 4.25)), 6.188rem);
    }
`;