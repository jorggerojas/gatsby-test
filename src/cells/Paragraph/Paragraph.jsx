import React from 'react';
import StyledParagraph from './StyledParagraph';

const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
