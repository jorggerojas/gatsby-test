import React from 'react';
import { Wrapper, StyledInput, Caption } from './StyledInput';

const Input = ({ label, border = "default", disabled = false, size, type, ...props }) => {
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
            <Caption disabled={disabled} border={border} label={label || null}>{label || null}</Caption>
        </Wrapper>
    );
};

export default Input;