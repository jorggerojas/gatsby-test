import React from 'react';
import StyledAvatar from './StyledAvatar';
import { SIZE } from './constants';

const Avatar = ({ src, size = SIZE.default, ...rest }) => {
  return <StyledAvatar src={src} {...rest} size={size} />;
};

export default Avatar;
