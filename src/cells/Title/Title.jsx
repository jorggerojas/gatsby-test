import React from 'react';
import StyledTitle from './StyledTitle'

/**
 * Title component overrides HTML heading tag (h1)
 * @param {String} children Content of the title
 * @param {Object} props HTML attributes for HTML Heading tag
 */
const Title = ({
  children,
  ...props
}) => {
  return (<StyledTitle {...props} >{children}</StyledTitle>)
}

export default Title;
