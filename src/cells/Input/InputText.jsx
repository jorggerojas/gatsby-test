import React from 'react';
import { StyledTextInput, InputWrapper, Label, Underline } from './StyledInput';

const InputText = ({ label, ...props }) => {
    return (
        <InputWrapper size={props.size}>
            <StyledTextInput id={props.id} required type="text" {...props} />
            <Underline />
            {label && !(props.placeholder) ? <Label htmlFor={props.id}>{label}</Label> : null}
        </InputWrapper>
    );
};

export default InputText;