import React from 'react';
import StyledAnchor from './StyledAnchor';

const Anchor = ({ label, href, ...rest }) => {
  return <StyledAnchor label={label} href={href} {...rest} />;
};

export default Anchor;
