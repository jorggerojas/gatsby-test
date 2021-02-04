import React from 'react';
import StyledParagraph from './StyledParagraph';

/**
 * Paragraph component overrides the HTML p tag
 * @param {String} children The content of the Paragraph
 * @param {Object} props HTML attributes for P tag
 */
const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
