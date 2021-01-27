import React from 'react';
import StyledButton from './StyledButton';
import { SIZE } from './constants';
const defaultColors = {
  default: '#937B3D',
  hover: '#AD9043',
  click: '#C3A24A',
};

const Button = ({
  label,
  size = SIZE.default,
  colors = defaultColors,
  icon = null,
  ...rest
}) => {
  return (
    <StyledButton
      size={size}
      colors={colors}
      isIconOnly={!label && icon !== null}
      hasIcon={icon !== null}
      {...rest}
    >
      {icon !== null ? <span className="button-icon-span">{icon}</span> : null}
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
