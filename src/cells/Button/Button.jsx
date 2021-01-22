import React from 'react';
import StyledButton from './StyledButton';

const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
};

const Button = ({ label, size, colors = defaultColors, ...rest }) => {
  return (
    <StyledButton size={size || 'md'} colors={colors} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
