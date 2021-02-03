import React from 'react';
import { Wrapper, StyledInput, Caption, Icon, Info } from './StyledInput';

const Input = ({ iconPass, iconRequired, label, border = "default", disabled = false, size, type, ...props }) => {
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