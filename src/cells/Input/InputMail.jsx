import React from 'react';
import { StyledMailInput, InputWrapper, Label, Underline } from './StyledInput';

const InputMail = ({ label, ...props }) => {
    return (
        <InputWrapper size={props.size}>
            <StyledMailInput type="email" id={props.id} required type="text" {...props} />
            <Underline />
            {label && !(props.placeholder) ? <Label htmlFor={props.id}>{label}</Label> : null}
        </InputWrapper>
    );
};

export default InputMail;