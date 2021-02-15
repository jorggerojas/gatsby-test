import React from 'react';
import StyledAnchor, { StyledAnchorExternal } from './StyledAnchor';

/**
 * Anchor component with icon (or no). This component uses 'Link' component
 * from Gatsby for pre-loa the page
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {Icon} icon The Icon component
 */
const Anchor = ({ label, href, color = null, icon = null, ...rest }) => {
  return (
    <StyledAnchor to={href} color={color} {...rest}>
      {label}
      {icon !== null && icon}
    </StyledAnchor>
  );
};

export const AnchorExternal = ({ label, href, color = null, icon = null, ...rest }) => {
  return (
    <StyledAnchorExternal href={href} color={color} {...rest}>
      {label}
      {icon !== null && icon}
    </StyledAnchorExternal>
  );
};

export default Anchor;
