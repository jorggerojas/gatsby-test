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
    & svg {
        width: 100%;
    }
    @media screen and (max-width: ${breakpoints.sm}){
        flex-direction: column;
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