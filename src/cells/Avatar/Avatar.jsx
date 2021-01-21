import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  border-radius: 100%;
  display: inline-block;
  height: 50px;
  width: 50px;
`;
const Avatar = ({ src, ...rest }) => {
  return <StyledAvatar src={src} {...rest} />;
};

export default Avatar;
