import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { PostRow } from '../MiniPost/StyledMiniPost';
import config from '../../utils/config';

const { breakpoints } = config;

export const TextContainer = styled(Container)`
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 0;
    justify-content: center;
    margin: 0;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
`;

export const TextRow = styled(PostRow)`
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.2557)), 6.192rem) 1rem;
    @media (min-width: ${breakpoints.md}) {
        flex-direction: column;
    }
    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        padding-left: 2.063rem;
        padding-right: 6.951rem;
    }
    @media (min-width: ${breakpoints.xl}) {
        flex-direction: row;
        padding-left: 10.313rem;
        padding-right: 10.389rem;
    }
`;

export const CardsContainer = styled.div`
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 0;
    margin: 0 1rem;
    & .horizontal-menu{
        margin: 0 0;
    }
    margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    & .menu-item-wrapper, .active{
        outline: none;
    }
    @media screen and (min-width: ${breakpoints.sm}){
        margin: 0 2rem;
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    }
    @media screen and (min-width: ${breakpoints.md}){
        max-width: 70vw;
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((1vw - 0.2rem) * 4.25)), 6.188rem);
    }
    @media screen and (min-width: ${breakpoints.xl}){
        margin-left: calc(15rem * 1.125);
        margin-bottom: clamp(3.213rem, calc(3.213rem + ((calc(1vw * 1.125) - 0.2rem) * 4.25)), 6.188rem);
    }
`;
