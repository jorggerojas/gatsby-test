import { Container, Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import config from '../../utils/config';

const { display, breakpoints } = config;

export const Main = styled.div`
    transition: all .2s ease;
    width: 100%;
    height: ${({ fit }) => fit ===
        "true" ? "fit-content" :
        "clamp(22.313rem, calc(22.313rem + ((1vw - 0.2rem) * 14.4643)), 32.438rem);"};
    margin: ${display.mobile.xxl} 0;
    padding: 0;
    @media screen and (min-width: ${breakpoints.md}){
        margin: ${display.desktop.xl} 0;
    }
    @media screen and (max-width: ${breakpoints.xl}){
        margin: calc(${display.desktop.xl} * 1.125) 0;
        /* padding: 0 calc(10.375rem * 1.125); */
    }
    @media screen and (min-width: 1500px){
        padding: 0 calc(10.375rem * 1.125);
    }
`;

export const Content = styled(Container)`
    padding: 0;
    height: 100%;
`;

export const Column = styled(Col)`
    margin: 0;
    ${({ paddingsmall }) => paddingsmall ? 'padding: 0.15rem 0.5rem;' : "padding: 1rem 1rem"};
    ${({ remove }) => remove ? 'padding: 0;' : null};
    & > div {
        width: 100%;
        height:100%;
        background-color: ${({ color }) => color || 'transparent'};
    }
`;

export const verticalAlign = align => {
    switch (align) {
        case 'top':
            return css`align-items: flex-start;`;
        case 'bottom':
            return css`align-items: flex-end;`;
        case 'center':
        default:
            return css`align-items: center;`;
    }
}

export const StyledRow = styled(Row)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    ${({ flex }) => flex === "true" ?
        'display: flex; align - items: center;justify - content: center;' : null};
    ${({ nested }) => nested === "true" ? 'flex-direction: column;' : null};
    &  > ${Column}{
        @media screen and (min-width: ${breakpoints.sm}) {
            ${({ nested }) => nested === "true" ? 'flex-flow: column;' : null};    
        }
        ${({ flex }) => flex === "true" ? 'height: -webkit-fill-available;' : null};
        ${({ nested }) => nested === "true" ? 'flex-flow: row;' : null};
        ${({ nested }) => nested === "true" ? 'max-width: 100%' : null};
    }
    @media screen and (max-width: ${({ noflex }) => breakpoints[noflex]}) {
        display: inline-block;
    }
      
`;