import React from 'react';
import { Wrapper, StyledInput, Caption, Icon, Info } from './StyledInput';

/**
 * Input component wrapped with label and span tags for better UX
 * @param {Icon} iconPass Icon for set the password 'visible'
 * @param {Icon} iconRequired Icon for mark input is required
 * @param {String} label The caption for the input
 * @param {String} border The border type for the input (full, bottom, overlaped)
 * @param {boolean} disabled Set the input disabled
 * @param {String} size Set the width of the input
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {Object} props HTML attributes for input tag
 */
const Input = ({
    iconPass,
    iconRequired,
    label,
    border = "default",
    disabled = false,
    size,
    type,
    ...props }) => {
    return (
        <Wrapper htmlFor={props.id} size={size} disabled={disabled} border={border} label={label || null}>
            <StyledInput
                {...props}
                border={border}
                disabled={disabled}
                type={type || 'text'} id={props.id}
                value={props.value || undefined}
                required label={label || null}
                placeholder={(label || props.placeholder) || 'Placeholder'}
            />
            <Info>
                <span>{iconPass || null}</span>
            </Info>
            <Caption border={border} disabled={disabled} label={label || null}>
                <span>{label || null}</span>
                <Icon>{iconRequired || null}</Icon>
            </Caption>
        </Wrapper>
    );
};

export default Input;