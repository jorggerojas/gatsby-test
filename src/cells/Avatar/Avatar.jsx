import React from 'react';
import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';

/**
 * Avatar component is a img HTML tag with a circular shape
 * @param {String} url The path of the image
 * @param {size} size The size of the image (large or default)
 * @param {Object} rest HTML attributes of a img tag 
 */
const Avatar = ({ src, size = SIZE.default, ...rest }) => {
  return <StyledAvatar src={src} {...rest} size={size} />;
};

export default Avatar;
