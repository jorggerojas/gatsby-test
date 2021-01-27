import React from 'react';
import { StyledInput, InputWrapper, Label, Underline } from './StyledInput';

const Input = ({ label, type, ...props }) => {
    return (
        <InputWrapper size={props.size} color={props.color}>
            <StyledInput id={props.id} required type={type || "text"} {...props} color={props.color} />
            <Underline />
            {label && !(props.placeholder) ? <Label htmlFor={props.id}>{label}</Label> : null}
        </InputWrapper>
    );
};

export default Input;