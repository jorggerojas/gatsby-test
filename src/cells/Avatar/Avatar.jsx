import React from 'react';
import StyledAvatar from './StyledAvatar'

const Avatar = ({ src, ...rest }) => {
  return <StyledAvatar src={src} {...rest} />;
};

export default Avatar;
