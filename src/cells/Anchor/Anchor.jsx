import React from 'react';
import StyledAnchor from './StyledAnchor';

const Anchor = ({ label, href, icon = null, ...rest }) => {
  return (
    <StyledAnchor href={href} {...rest}>
      {label}
      {icon !== null && icon}
    </StyledAnchor>
  );
};

export default Anchor;
