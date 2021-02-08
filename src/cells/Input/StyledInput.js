import styled from 'styled-components';
import config from '../../utils/config';
import { getSize } from '../../cells/Paragraph/StyledParagraph';
import { CreditCard, RadioButton } from 'react-ikonate';

const { text, spacing, breakpoints } = config;
const borderColor = '#001D48';
const iconColor = '#2329D6';
export const Helper = styled(CreditCard)`
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    position: absolute;
    bottom: 0;
    color: ${iconColor};
    top: 1rem;
    left: ${spacing.xs};
    display: inline-flex;
    font-size: ${() => getSize('lg')};
    font-weight: 400;
    transform-origin: 0 0;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background: transparent;
    cursor: default;
    @media screen and (min-width: ${breakpoints.xl}) {
        top: calc(1rem * 1.125);
        left: calc(${spacing.xs} * 1.125);
        font-size: ${() => getSize('lg', true)};
    }
`;

export const Info = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    opacity: 0;
    display: inline-flex;
    padding: ${spacing.xs};
    font-size: ${() => getSize('md')};
    color: ${text.mutedGray};
    font-weight: 400;
    transform-origin: 0 0;
    transition: all .3s ease;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background: transparent;
    cursor: default;
    z-index: 9999;
    @media screen and (min-width: ${breakpoints.xl}) {
        /* left: calc(${spacing.xs} * 1.125); */
        font-size: ${() => getSize('md', true)};
    }
    & span{
        z-index: 9999;
        float: right;
        &:hover{
            font-size:28rem;
            color: red;
        }
    }
`;

export const Wrapper = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    position: relative;
    /* margin: 0; ESTE SÍ */
    margin: 1rem 0; /*ESTE NO*/
    width: ${() => getInputSize('full')};
    overflow:  ${(props) => (props.label && props.border === 'overlap' && !props.disabled) ? 'visible' : 'hidden'};
    transition: all .1s ease;
    @media screen and (min-width: ${breakpoints.sm}) {
        width: ${({ size }) => getInputSize(size || 'default')};
    }
`;

export const Caption = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    position: absolute;
    bottom: 0.875rem;
    top: 0.8rem;
    left: ${spacing.xs};
    font-size: ${() => getSize('md')};
    color: ${text.mutedGray};
    font-weight: 400;
    transform-origin: 0 0;
    transition: all .2s ease;
    pointer-events: none;
    width: calc(100% - ${spacing.xs});
    background: transparent;
    @media screen and (min-width: ${breakpoints.xl}) {
        bottom: calc(0.875rem * 1.125);
        top: calc(0.8rem * 1.125);
        left: calc(${spacing.xs} * 1.125);
        font-size: ${() => getSize('md', true)};
    }
`;

export const Icon = styled(RadioButton)`
    font-size: ${() => getSize('lg')};
    color: ${iconColor};
    display: inline-flex;
    float: right;
    margin: 0.063rem 0.438rem;
    transition: all .1s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media screen and (min-width: ${breakpoints.xl}){
        font-size: ${() => getSize('lg', true)};
    } 
`;

export const StyledInput = styled.input`
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    font-size: ${getSize('md')};
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3rem;
    font-family: inherit;
    padding:
        ${spacing.xs} 2.1rem ${spacing.xs} ${(iconHelper) => iconHelper === null ?
        spacing.xs : '1.8rem'};
    font-weight: 400;
    background: white;
    ${({ border }) => border === 'bottom' ?
        `border:0; border-bottom: 1px solid ${borderColor}` :
        `border: 1px solid ${borderColor}`};
    color: ${text.dark};
    &::placeholder{
        color: ${({ label }) => label ? 'transparent' : text.mutedGray};
    }
    &:not(:placeholder-shown){
      & ${Caption}{
            padding-top: ${spacing.nano};
            transform: translate3d(0,-${spacing.xs},0) scale(.6875);
            @media screen and (min-width: ${breakpoints.xl}) {
                padding-top: calc(${spacing.nano} * 1.125);
                transform: translate3d(0,calc(-${spacing.xs} * 1.125),0) scale(calc(.6875 * 1.125));
            }
        }
    }
    &:focus, &:valid {
        transition: all .1s  cubic-bezier(0.12, 0, 0.39, 0);
        transition: border .1s  cubic-bezier(0.12, 0, 0.39, 0);
        background: white;
        outline: none;
        ${({ border }) => border === 'bottom' ?
        `border: 0; border-bottom: 2px solid ${borderColor}` : `border: 2px solid ${borderColor}`};
        padding-bottom: ${(props) => props.label !== null ? (props.border === 'overlap' ? spacing.xs : 0) : spacing.xs} !important;
        padding-left: ${({ iconHelper }) => iconHelper === null ? spacing.xs : '1.8rem'};
        padding-top: ${spacing.sm};
        & ~${Info}{
            opacity: 1;
            z-index: 9999999;
            &:hover{
                font-size:20rem;
                color: red;
            }
        }
        & ~${Helper}{
            opacity: 1;
        }
        & ~${Caption}{
            width: auto;
            background: ${(props) => (props.label && props.border === 'overlap' && !props.disabled) ? 'white' : 'transparent'};
            color: ${text.dark};
            padding-top: ${spacing.nano};
            padding-right:${spacing.xs};
            padding-left:${({ border }) => border === 'overlap' ? spacing.xs : '0'};
            transform: translate3d(0,${({ border }) => border === 'overlap' ? '-1.4rem' : '-0.8rem'},0) scale(.6875);
            @media screen and (min-width: ${breakpoints.xl}) {
                padding-top: calc(${spacing.nano} * 1.125);
                padding-right: calc(${spacing.xs} * 1.125);
                transform: translate3d(0,calc(${({ border }) => border === 'overlap' ? '-1.4rem' : '-0.8rem'} * 1.125),0) scale(calc(.6875 * 1.125));
            }
            & ${Icon}{
                display: inline-flex;
                margin: 0 ${spacing.xs};
            }
        }
        @media screen and (min-width: ${breakpoints.xl}) {
            ${({ border }) =>
        (border === 'bottom') ?
            `border: 0; border-bottom: calc(2px * 1.125) solid ${borderColor};` :
            `border: calc(0.12rem * 1.125) solid ${borderColor};`};
            padding-bottom: ${(props) =>
        props.label !== null ?
            (props.border === 'overlap' ?
                `calc(${spacing.xs} * 1.125)` : 0) : `calc(${spacing.xs} * 1.125)`} !important;
            padding-left: ${({ iconHelper }) => iconHelper === null ?
        `calc(${spacing.xs} * 1.125)` : 'calc(1.8rem * 1.125)'};
            padding-top: calc(${spacing.sm} * 1.125);
        }
    }
    @media screen and (min-width: ${breakpoints.xl}) {
        font-size: ${getSize('md', true)};
        height: calc(3rem * 1.125);
        padding:
            calc(${spacing.xs} * 1.125) calc(2.1rem * 1.125) calc(${spacing.xs} * 1.125) ${(iconHelper) => iconHelper === null ? `calc(${spacing.xs} * 1.125)` : 'calc(1.8rem * 1.125)'};
         ${({ border }) =>
        (border === 'bottom') ?
            `border: 0; border-bottom: calc(1px * 1.25) solid ${borderColor};` :
            `border: calc(1px * 1.25) solid ${borderColor};`};
    }
    &:disabled{
        background: ${text.lightGray};
        color: ${text.mutedGray};
        padding-bottom:0;
        ${({ value }) => value !== undefined ? (`
            & ~${Caption}{
                width: auto;
                color: ${text.mutedGray};
                padding-top: ${spacing.nano};
                padding-right:${spacing.xs};
                & ${Icon}{
                    display: inline-flex;
                    padding: 0 0 0 ${spacing.xs};
                }
                ${({ border }) =>
            (border === 'bottom') ?
                `border: 0; border-bottom: calc(1px * 1.25) solid ${borderColor};` :
                `border: calc(1px * 1.25) solid ${borderColor};`};
                transform: translate3d(0,-0.8rem,0) scale(.6875);
                @media screen and (min-width: ${breakpoints.xl}) {
                    padding-top: calc(${spacing.nano} * 1.125);
                    padding-right: calc(${spacing.xs} * 1.125);
                    transform: translate3d(0,calc(-0.8rem * 1.125),0) scale(calc(.6875 * 1.125));
                }
            }`)
        : `${({ border }) =>
            (border === 'bottom') ?
                `border: 0; border-bottom: calc(1px * 1.25) solid ${borderColor};` :
                `border: calc(1px * 1.25) solid ${borderColor};`};`}
    }
`;

const getInputSize = (size, max = false) => {
    switch (size) {
        case 'sm':
            return `${max ? 'calc(16.6875rem * 1.125)' : '16.6875rem'} `;
        case 'lg':
            return `${max ? 'calc(23.1875rem * 1.125)' : '23.1875rem'} `;
        case 'md':
            return `${max ? 'calc(19.9375rem * 1.125)' : '19.9375rem'} `;
        case 'full':
            return '100%';
        case 'default':
        default:
            return `clamp(16.6875rem, calc(16.6875rem + ((${max ? 'calc(1vw * 1.125)' : '1vw'} - 0.01rem) * 7.3034)), 23.1875rem); `;
    }
}