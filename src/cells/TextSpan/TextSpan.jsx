import React from 'react';
import { StyledSpan } from './StyledSpan';

/**
 * Span component overrides the HTML span tag
 * @param {String} children The content of the TextSpan
 * @param {Object} props HTML attributes for P tag
 */
const TextSpan = ({ children, ...props }) => {
    return <StyledSpan {...props}>{children}</StyledSpan>;
};

export default TextSpan;
