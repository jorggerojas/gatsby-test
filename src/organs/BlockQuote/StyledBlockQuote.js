import styled from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

export const StyledBlockQuote = styled.div`
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: inline-flex;
    align-items: flex-start;
    margin: 0;
    padding: 0 1rem;
    margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    @media screen and (max-width: ${breakpoints.sm}){
        flex-direction: column;
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
        padding-left: clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.25) - 0.48rem) * 9.8214)), 10.313rem);
        padding-right: clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.25) - 0.48rem) * 9.8214)), 10.313rem);
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((calc(1vw * 1.125) - 0.2rem) * 4.25)), 6.188rem);
    }
`;

export const TextQuotes = styled.div`
    margin: 4rem 0 0 0;
    @media (min-width: ${breakpoints.sm}) {
        margin: 0 0 0 4rem;
    }
`;

export const lineHeight = () => {
    return 'clamp(1.7rem, calc(1.7rem + ((1vw - 0.2rem) * 2.2643)), 3.285rem);';
};