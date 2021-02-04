import React from 'react';
import StyledAnchor from './StyledAnchor';

/**
 * Anchor component with icon (or no). This component uses 'Link' component
 * from Gatsby for pre-loa the page
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {Icon} icon The Icon component
 */
const Anchor = ({ label, href, icon = null, ...rest }) => {
  return (
    <StyledAnchor to={href} {...rest}>
      {label}
      {icon !== null && icon}
    </StyledAnchor>
  );
};

export default Anchor;
