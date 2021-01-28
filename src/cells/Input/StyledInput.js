import styled from 'styled-components';
import config from '../../utils/config';
import { getSize } from '../../cells/Paragraph/StyledParagraph'

const { text, colors } = config;

export const InputWrapper = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    width: ${({ size }) => getInputSize(size || 'default')};
    & div:before{
        position: absolute;
        content:"";
        height: 100%;
        background: ${({ color }) => color ? colors[color]['default'] : text.mutedGray};
        width: ${({ size }) => getInputSize(size || 'default')};
        transform: scaleX(0);
        transition: transform 2 ease;
        @media screen and (max-width: 576px) {
            width: ${() => getInputSize('full')};
        }
        @media screen and (min-width: 1440px) {
            width: ${({ size }) => getInputSize(size || 'default', true)};
        }
    }
    @media screen and (max-width: 576px) {
            width: ${() => getInputSize('full')};
    }
    @media screen and (min-width: 1440px) {
        width: ${({ size }) => getInputSize(size || 'default', true)};
    }
`;

export const Label = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    font-size:${getSize('sm')};
    pointer-events: none;
    position: absolute;
    bottom: 1.1rem;
    left: 0.5rem;
    color: ${text.mutedGray};
    transition: all 0.2s ease;
`;

export const Underline = styled.div`
    position: relative;
    bottom: 1.11rem;
    height: 0.126rem;
    &:before{
        position:absolute;
        content:"";
        height: 100%;
        transform: scaleX(0);
    }
`;

export const StyledInput = styled.input`
    margin: 1rem 0;
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    height: 2.15rem;
    font-weight: 400;
    font-size: 0.875rem;
    width: ${({ size }) => getInputSize(size || 'default')};
    background: ${({ background }) => background ? text.lightGray : 'none'};
    border: none;
    border-bottom: ${(props) => props.background ?
        'none' : `0.063rem solid ${props.color ? colors[props.color]['default'] : text.mutedGray}`};
    outline: none;
    padding-bottom: 0;
    padding-left: 0.625rem;
    color: ${(props) => props.background ?
        text.darkGray :
        (props.color ? colors[props.color]['default'] :
            text.darkGray)};
    @media screen and (max-width: 576px) {
        width: ${({ size }) => getInputSize('full')};
    }
    @media screen and (min-width: 1440px) {
        width: ${({ size }) => getInputSize(size || 'default', true)};
    }
    & ::placeholder {
        color: ${text.mutedGray};
    }
    & ::-webkit-input-placeholder {
        color: ${text.mutedGray};
    }
    & ::-ms-input-placeholder {
        color: ${text.mutedGray};
    }
    & :focus, 
    & :valid {
        & ~label{
            transform: translateY(-1.5rem);
            font-size: ${getSize('xs')};
            left: 0.25rem;
            color: ${({ color }) => color ? colors[color]['default'] : text.darkGray};
        }
        & ~${Underline}:before{
            transform: scaleX(1);
            transition: transform 0.2s ease;
        }
    }
    & :disabled{
        background: ${text.lightGray} !important;
        color: ${text.mutedGray};
        border: none !important;
        user-select: none !important;
        cursor: not-allowed !important;
        & ~label {
            color: ${text.mutedGray} !important;
            font-size: 0.875rem!important;
            bottom: 1.01rem;
            left: 0;
            padding-left: 0.655rem;
        }
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