import React from 'react';
import StyledButton from './StyledButton';

const Button = ({ label, size, ...rest }) => {
  return (
    <StyledButton size={size || 'md'} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
