import styled from 'styled-components';
import config from '../../utils/config';

const { breakpoints } = config;

export const StyledImage = styled.img`
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: ${({ width }) => width || '100%'};
    /* Override */
    height: ${(props) => props.post === 'true' && props.height === null ?
        'clamp(10.74rem, calc(10.74rem + ((1vw - 0.2rem) * 43.5857)), 41.25rem)' :
        (props.height || '100%')};
    object-fit: cover;
    padding: ${({ post }) => post === 'true' ? `0 1rem` : "0"};
    margin-bottom: ${({ post }) => post === 'true' ?
        'clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem)' : '0'};
    @media screen and (min-width: ${breakpoints.sm}){
       padding-left: ${({ post }) => post === 'true' ? `2rem` : "0"};
       padding-right: ${({ post }) => post === 'true' ? `2rem` : "0"};
    }
    @media screen and (min-width: ${breakpoints.md}){
        padding-left: ${({ post }) => post === 'true' ?
        `clamp(6.188rem, calc(6.188rem + ((1vw - 0.48rem) * 9.8214)), 10.313rem);` : "0"};
        padding-right: ${({ post }) => post === 'true' ?
        `clamp(6.188rem, calc(6.188rem + ((1vw - 0.48rem) * 9.8214)), 10.313rem);` : "0"};
    }
    @media screen and (min-width: ${breakpoints.xl}){
        padding-left: ${({ post }) => post === 'true' ?
        `clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.25) - 0.48rem) * 9.8214)), 10.313rem);` : "0"};
        padding-right: ${({ post }) => post === 'true' ?
        `clamp(6.188rem, calc(6.188rem + ((calc(1vw * 1.25) - 0.48rem) * 9.8214)), 10.313rem);` : "0"};
        margin-bottom: ${({ post }) => post === 'true' ?
        `clamp(3.213rem, calc(3.213rem + ((calc(1vw * 1.125) - 0.2rem) * 4.25)), 6.188rem)` : "0"};
    }
`;